from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
#from . import Articles


# Create your models here.
class Articles(models.Model):        
   title = models.CharField(max_length=100)
   slug = models.SlugField(unique=True)
   body = models.TextField()  
   date = models.DateTimeField(auto_now_add=True)
   thumb = models.ImageField(default='default.png',blank=True)
  # author = models.ForeignKey('User',on_delete=models.CASCADE)
  # author = models.ForeignKey(User,default=None)

   def __str__(self):    
      return self.title
      
   def snippet(self):        
      return self.body
   
   def get_absolute_urls(self):
      return self.slug
   
   #def articles(self):
    #  return self.auther
     
 #return self.body[:500] + "..."
 #python manage.py makemigrations
 #python manage.py migrate