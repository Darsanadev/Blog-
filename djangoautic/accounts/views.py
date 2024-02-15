from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.shortcuts import redirect
from django.contrib.auth import login,logout
from django.http import JsonResponse

# Create your views here.
def signup_views(request):# <button><a href="{% url 'Article:create' %}">Article create</a></button>
    if request.method=='POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
          #User = form.save()
          #login(request,User)
          #log the user in
         return redirect('Article:list')
        #return redirect(request,'Article/article_list.html')
    else:
        form = UserCreationForm()
    return render(request,'accounts/signup_views.html',{'form':form})

def login(request):
    if request.method=='POST':
        form = AuthenticationForm(data=request.POST)  
        #if form.is_valid():
            #log in the user
            #user = form.get_user()
            #login(request)
        #return redirect('Article:list')
           
        # if 'next'in request.POST:
        #return redirect(request.POST.get('next'))
         #else:            
           # if not user:
       # return JsonResponse({'message': "user invalid"})
        return redirect('Article:list')
           # else:
        #return render(request,'articles/article_list.html',{'form':form})                         
    else:
        form = AuthenticationForm()
    return render(request,'accounts/login.html',{'form':form})

def logout(request):
    if request.method == 'POST':
       # logout(request)
       #return redirect('Article:logout')
        return JsonResponse(' hey gang see u nxt time bye the bye! ',safe=False) 
        #return render(request,'Articles/article_create.html')   
    else:
        form = UserCreationForm()
        #return render(request,'articles/article_list.html') 
    return render(request,'accounts/logout.html',{'form':form})
