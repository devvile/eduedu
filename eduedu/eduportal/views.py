from django.shortcuts import render


def index(request):
    return render(request, './eduportal/home.html')

def nauka(request):
    return render(request, './eduportal/nauka.html')

def podstawy(request):
    print(request)
    return render(request, './eduportal/podstawy.html')

def admin_panel(request):
    return render(request, './eduportal/admin_panel.html')

def add_note(request):
    return render(request, './eduportal/add_note.html')