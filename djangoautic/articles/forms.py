from django import forms
from.import models
#from . models import Article


class CreateArticle(forms.ModelForm):
    class Meta:
        model = models.Articles 
       # model = models.Article
        fields = ('title','body','slug','thumb','auther')
        abstact = True
