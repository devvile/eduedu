from django.urls import path
from .views import index, nauka, podstawy


urlpatterns = [path('', index, name='index'),
               path('nauka', nauka, name='nauka'),
               path('podstawy', podstawy, name='podstawy')
               ]