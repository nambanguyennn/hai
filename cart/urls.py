from django.contrib.auth import login, logout
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView

urlpatterns=[
    path('cart-item', views.cart,name='cart'),
    
]