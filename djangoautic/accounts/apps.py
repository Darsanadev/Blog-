from django.apps import AppConfig


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'



"""
from . import views
from django. urls import path

app_name = 'Article'

urlpatterns=[
    path('create/',views.article_create,name="create"),
]
from django.contrib.auth.models import User
#from . import accounts

# Create your models here.
class accounts(models.Model):
   title = models.CharField(max_length=100)
   slug = models.SlugField(unique=True)
   body = models.TextField()  
   date = models.DateTimeField(auto_now_add=True)
   thumb = models.ImageField(default='default.png',blank=True)
   
   """