from django.urls import path #django.conf.url import url nte pakarm eeee line use aaa
from django.urls import re_path as path
from . import views


app_name = 'accounts'

urlpatterns=[
    path('signup/',views.signup_views,name="signup"),
    path('login/',views.login,name='login'),
    path('logout/',views.logout,name='logout'),
]
