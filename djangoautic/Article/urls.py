from . import views
from django.urls import path
from django.urls import re_path as path

app_name = 'Article'

urlpatterns=[
    path('create/', views.article_create, name='create'),
    path('list/', views.article_list, name="list"),
    path('detail/<str:slug>/', views.article_detail, name='detail')
    
]

