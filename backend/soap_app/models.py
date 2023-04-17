from django.db import models


class User(models.Model):
	first_name = models.CharField(max_length=255)
	last_name = models.CharField(max_length=255)
	email = models.EmailField(blank = False, null = False, unique = True)
	password = models.CharField(max_length=255)
	account_type = models.CharField(max_length=4) 

	def __str__(self):
		return f"{self.name} | {self.email}"

