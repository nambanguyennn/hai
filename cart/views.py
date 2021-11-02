from django.shortcuts import get_object_or_404, render
from django.conf import settings
from django.http import JsonResponse
from cart.models import CartItem,Cart
from product.models import Product
from django.contrib.auth.models import User
import json
# Create your views here.
def cart(request):
    if request.user.is_authenticated:
        cart,created=Cart.objects.get_or_create(user=request.user, complete=False)
        items=cart.cartitem_set.all()
        cartitem=cart.get_cart_item
    else:
        items=[]
        cart={'get_cart_total':0, 'get_cart_item':0, 'shipping':False}
        cartitem=cart['get_cart_item']

    context={'items':items,'cart':cart, 'cartItem':cartitem}
    return render(request,'pages/cart.html',context)

