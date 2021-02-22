from django.shortcuts import render


def index(request):
    return render(request, './eduportal/home.html')

def nauka(request):
    return render(request, './eduportal/nauka.html')

def podstawy(request):
    print(request)
    return render(request, './eduportal/podstawy.html')