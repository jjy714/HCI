from django.db import models

# Create your models here.

class foods(models.Model):
    name = models.CharField(max_length=200) 
    category = models.CharField(max_length=10, null=True)
    spiciness = models.BooleanField() # 0 ~ 5
    carb = models.CharField(max_length=10, null=True)
    temperature = models.CharField(max_length=10,null=True) # hot and cold 
    soup = models.BooleanField(default = False, null=True)
    def __str__(self):
        return self.name

class questions(models.Model):
    question = models.TextField(max_length=300, editable=True)
    answerFromAnsTable = models.CharField(max_length=100, null=True)
    
# Change to Integer field later to calulate the preference mathematically 
    
#Ankswer Table: 
# 1. Answer list for the question. 
# Foreign key to the question id to match
# insert data into the question table 

class answers(models.Model):
    answer_id = models.ForeignKey(questions, on_delete=models.CASCADE)
    answer = models.BooleanField(null=True)
    
    
# Yes or No question
    
    

