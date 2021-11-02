from django.urls import path
from . import views

urlpatterns=[
    path('list-blog',views.PostListView.as_view(),name='blog'),
    path('<int:pk>/',views.post, name='post'),
]