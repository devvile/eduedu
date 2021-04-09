from django.db import models

class Note(models.Model):
    head = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    body = models.TextField(max_length=2000)

class Question(models.Model):
    question = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    answer = models.TextField(max_length=2000)

class Question_Category(models.Model):
    name = models.CharField(max_length=255)

class Note_Category(models.Model):
    name = models.CharField(max_length=255)
