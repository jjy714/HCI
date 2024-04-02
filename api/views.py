from django.shortcuts import render
from django.http import response
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import *
import pandas as pd
from tablib import Dataset
import csv


class AnsSubmitReceive(generics.GenericAPIView):
    queryset = questions.objects.all()
    
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
# Create your views here.

def import_books(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            foods.objects.create(
                name = row['Food Name'],
                category = row['Category'],
                spiciness = row['Spiciness'],
                carb = row['Rice/Noodle/Bread'],
                temperature = row['Hot/Cold'],
                soup = row['Soup']
            )

if __name__ == '__main__':
    csv_file_path = '/Users/jason/Projects/HCIProject/WFL/api/food_data.csv'  # Replace with your actual file path
    import_books(csv_file_path)