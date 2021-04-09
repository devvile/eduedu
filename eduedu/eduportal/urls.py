from django.urls import path
from .views import index, nauka, podstawy, admin_panel


urlpatterns = [path('', index, name='index'),
               path('nauka', nauka, name='nauka'),
               path('podstawy', podstawy, name='podstawy'),
               path('admin_panel', admin_panel, name='admin_panel'),
               ]