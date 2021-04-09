from django.db import models

class Wpis(models.Model):
    head = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    body = models.TextField(max_length=2000)
