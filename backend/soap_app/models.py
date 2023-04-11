from django.db import models

class User(models.Model):
	first_name = models.CharField(max_length=255)
	last_name = models.CharField(max_length=255)
	email = models.EmailField(max_length=100)
	account_type = models.CharField(max_length=4) # 'paid' or 'free'
# Create your models here.
