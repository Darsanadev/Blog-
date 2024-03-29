from django.db import models
from django.contrib.auth.models import User 
# Create your models here.
    
class Article(models.Model):
    title=models.CharField(max_length=100)
    slug=models.SlugField(unique=True)
    body=models.TextField()
    date=models.DateTimeField(auto_now_add=True)
    thumb=models.ImageField(default='default.png',blank=True)
    auther=models.ForeignKey(User,on_delete=models.CASCADE,default=None)
       
    def __str__(self):    
      return self.title 
      
    def snippet(self):        
      return self.body
       
    def get_absolute_urls(self):
      return self.slug
      
    #def __str__(self):
    #  return str(self.auther) + " Blog title: " + self.title
     