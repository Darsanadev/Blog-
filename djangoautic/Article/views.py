from django.shortcuts import render,redirect
from django. http import HttpResponse,JsonResponse
from.models import Article
from.import forms
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required(login_url="/accounts/login")
def article_create(request):
    if request.method=='POST':
        form = forms.CreateArticle(request.POST,request.FILES) 
        if form.is_valid():
          instance = form.save(commit=False)
          instance.auther = request.user
          instance.save()
          print(instance)
          #return redirect('Article:list')
         # return JsonResponse('Article:list')
          return render(request,'article_list.html', {'instance':instance})        
    else:
        form = forms.CreateArticle() 
    return render(request,'Article/article_create.html', {'form':form})

def article_list(request):
    articles = Article.objects.all().order_by('date')
    print(articles)#{% url 'Article:detail' slug=article.get_absolute_urls %}
    return render(request,'Article/article_list.html', {'articles':articles})

def article_detail(request,slug):
    #return HttpResponse(slug)
    article = Article.objects.filter(slug=slug).first()
    return render(request,'Article/article_detail.html', {'article':article})
