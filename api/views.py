from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import FoodSerializer, QuestionSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import questions, foods


class QuestiontSend(generics.CreateAPIView):
    serializer_class = QuestionSerializer
    queryset = questions
    authentication_classes = [AllowAny]
    
    def get_queryset(self, id):
        return questions.filter(id)
    


class SendResult(generics.CreateAPIView):
    """
    if answer collected is ...
    nested if statement to specific table. 
    
    return random food in that category . 
    
    """
    def spicyFood(self):
        return questions.objects.filter(spiciness=True)
    def soupFood(self):
        return questions.objects.filter(soup=True)
    def RBN(self):
        if 
        return questions.objects.filter(carb="밥")
    def temperatureFood(self):
        return questions.objects.filter()

class ReceiveAnswers(generics.CreateAPIView):
    #if answer receive table no.3 is str value, 
    # find a way to return that value 
    
    pass    


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]