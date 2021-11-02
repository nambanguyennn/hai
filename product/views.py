from django.core import paginator
from django.shortcuts import render,get_object_or_404
from blog.models import Post
from .models import Product,Category
from django.views.generic import ListView
from cart.models import Cart,CartItem
from order.models import Order
from django.core.paginator import Paginator,EmptyPage,PageNotAnInteger
from django.http import JsonResponse,HttpResponseRedirect
import json
import datetime
from product.forms import CommentForm
# Create your views here.

def categories(request):
    return {
        'categories': Category.objects.all().order_by('time')
    }

def index(request):
    if request.user.is_authenticated:
        cart,created=Cart.objects.get_or_create(user=request.user, complete=False)
        items=cart.cartitem_set.all()
        cartitem=cart.get_cart_item
    else:
        items=[]
        cart={'get_cart_total':0, 'get_cart_item':0, 'shipping':False}
        cartitem=cart['get_cart_item']
    category=Category.objects.all().order_by("time")
    products=Product.objects.all().order_by("-time")
    return render(request,'pages/index.html',{"Category":category,"Product":products, 'cartItem':cartitem})

def search(request):
    if request.method=='POST':
        searched=request.POST['searched']
        product=Product.objects.filter(title__contains=searched)
        blog=Post.objects.filter(title__contains=searched)
        context={'searched':searched,'Product':product}
        return render(request,'pages/search.html',context)
    else:
        context={}
        return render(request,'pages/search.html',context)

def category_list(request, category_slug):
    if request.user.is_authenticated:
        cart,created=Cart.objects.get_or_create(user=request.user, complete=False)
        items=cart.cartitem_set.all()
        cartitem=cart.get_cart_item
    else:
        items=[] 
        cart={'get_cart_total':0, 'get_cart_item':0, 'shipping':False}
        cartitem=cart['get_cart_item']
    category = get_object_or_404(Category, slug=category_slug)
    products = Product.objects.filter(category=category)
    paginator=Paginator(products,12)
    pageNumber=request.GET.get('page')
    try:
        product=paginator.page(pageNumber)
    except PageNotAnInteger:
        product = paginator.page(1)
    except EmptyPage:
        product = paginator.page(paginator.num_pages)
    return render(request, 'product/listproduct.html', {'Category': category, 'Product': product, 'cartItem':cartitem})
def details_product(request,pk):
    product=Product.objects.get(pk=pk)
    form=CommentForm()
    if request.method=='POST':
        form=CommentForm(request.POST,author=request.user,product=product)
        if form.is_valid():
            form.save()
    return render(request, 'product/details.html',{'pro':product, 'form':form})

def updateItem(request):
    data= json.loads(request.body)
    productId=data['productId']
    action =data['action']
    print('Action:',action)
    print('productId:',productId)

    product=Product.objects.get(id=productId)
    cart,created=Cart.objects.get_or_create(user=request.user, complete=False)
    cartitem,created=CartItem.objects.get_or_create(cart=cart,product=product)
    if action == 'add':
        cartitem.qunatity= (cartitem.qunatity +1)
    elif action == 'remove':
        cartitem.qunatity= (cartitem.qunatity - 1)
    elif action== 'delete':
        cartitem.delete()
    
    cartitem.save()
    if cartitem.qunatity <= 0:
        cartitem.delete()
    return JsonResponse('Item was added', safe=False)


def processOrder(request):
    transaction_id=datetime.datetime.now().timestamp()
    data=json.loads(request.body)
    if request.user.is_authenticated:
        cart,created=Cart.objects.get_or_create(user=request.user, complete=False)
        total=data['form']['total']
        if total == cart.get_cart_total:
            cart.complete=True
        cart.save()
        Order.objects.create(
            user=request.user,
            cart=cart,
            address=data['shipping']['address'],
            phome=data['shipping']['phone'],
            order_description=data['shipping']['order_description'],
        )
    else:
        print('user is not login')
    return JsonResponse('payment complate', safe=False)

