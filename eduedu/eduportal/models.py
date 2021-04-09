from django.db import models

class Question_Category(models.Model):
    name = models.CharField(max_length=255)

class Note_Category(models.Model):
    name = models.CharField(max_length=255)

class Note(models.Model):
    head = models.CharField(max_length=255)
    category = models.ForeignKey(Note_Category ,on_delete=models.CASCADE)
    body = models.TextField(max_length=2000)

class Question(models.Model):
    question = models.CharField(max_length=255)
    category = models.ForeignKey(Question_Category,on_delete=models.CASCADE)
    answer = models.TextField(max_length=2000)

