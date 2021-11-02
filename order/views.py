from django.shortcuts import render
from .models import Order
from cart.models import CartItem,Cart
from product.models import Product
import json
from django.contrib import auth
import datetime
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def order(request):
    if request.user.is_authenticated:
        cart,created=Cart.objects.get_or_create(user=request.user)
        items=cart.cartitem_set.all()
        cartitem=cart.get_cart_item
    else:
        items=[]
        cart={'get_cart_total':0, 'get_cart_item':0, 'shipping':False}
        cartitem=cart['get_cart_item']

    context={'items':items,'cart':cart, 'cartItem':cartitem}
    return render(request, 'pages/order.html',context)


