from django.db import models

# Create your models here.

class foods(models.Model):
    
    name = models.CharField(max_length=200) 
    temperature = models.CharField(max_length=10) # hot and cold 
    spiciness = models.IntegerField() # 0 ~ 5
    origin = models.CharField(max_length=10)
    soup = models.BooleanField(default = False)
    def __str__(self):
        return self.name

class questions(models.Model):
    
    question = models.CharField(max_length=300)
    answer = models.IntegerField()
    