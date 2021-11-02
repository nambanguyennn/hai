from django.contrib.auth import login, logout
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView

app_name = 'product'

urlpatterns=[
    path('',views.index, name='store'),
    path('<slug:category_slug>/', views.category_list, name='category_list'),
    path('product/<int:pk>/',views.details_product,name='details'),
    path('update-item',views.updateItem, name='update-item'),
    path('process-order',views.processOrder, name='process-order'),
    path('search',views.search, name='search')


    
]