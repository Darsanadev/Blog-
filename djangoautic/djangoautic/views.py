from django.http import HttpResponse
from django.shortcuts import render


def homepage(request):
    #return HttpResponse('Hoepage')
    return render(request,'homepage.html')

def about(request):
    #return HttpResponse('Hello world')
    return render(request,'about.html')
