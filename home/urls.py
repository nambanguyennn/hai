from django.contrib.auth import login, logout
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView

urlpatterns=[
    path('register/',views.register, name="register"),
    path('login/',views.login, name="login"),
    path('logout/',views.logout, name='logout'),
]