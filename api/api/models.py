from operator import mod
from django.db import models

class Student(models.Model):
  prn = models.CharField(max_length=100)
  name = models.CharField(max_length=100)
  roll = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
