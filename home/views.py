from django.shortcuts import render
from .form import RegistrationForm
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.contrib.auth import authenticate
from django.contrib import auth
from product.models import Category,Product
# Create your views here.

def register(requset):
    form=RegistrationForm()
    if requset.method=='POST':
        form=RegistrationForm(requset.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/')
    return render(requset,'user/register.html', {'form':form})
def login(request):
    if request.method=='POST':
        taikhoan=request.POST.get('taikhoan')
        matkhau=request.POST.get('matkhau')
        my_user=authenticate(username=taikhoan,password=matkhau)
        if my_user is not None:
            auth.login(request,my_user)
            return redirect('/')
        else:
            return redirect('login')
    else:
        return render(request,'user/login.html')
def logout(request):
    auth.logout(request)
    return redirect('/')
    


