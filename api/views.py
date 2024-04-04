from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import FoodSerializer, QuestionSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import questions, foods, answers

class QuestionSend(generics.ListAPIView):
    serializer_class = QuestionSerializer
    queryset = questions.objects.all()
    permission_classes = [AllowAny]
        
    def get_queryset(self):
        question_id = self.kwargs.get('id', None)
        if question_id is not None:
            return self.queryset.filter(id=question_id)
        return self.queryset.none()
    
    
class AnswerReceived(generics.UpdateAPIView):
    serializer_class = QuestionSerializer
    queryset = questions.objects.all()
    permission_classes = [AllowAny]
    
    def perform_update(self, serializer):
        answer_id = self.kwargs.get('id', None)
        if answer_id is not None:
            return serializer.save(id = answer_id)
 
class SendResult(generics.CreateAPIView):
    """
    if answer collected is ...
    nested if statement to specific table. 
    
    return random food in that category . 
    
    """
    serializer_class = FoodSerializer
    queryset = foods
    authentication_classes = [AllowAny]
    
    def spicyFood(self):
        return questions.objects.filter(spiciness=True)
    def soupFood(self):
        return questions.objects.filter(soup=True)
    def RBN(self):
        return questions.objects.filter(carb="밥")
    def temperatureFood(self):
        return questions.objects.filter()

class ReceiveAnswers(generics.CreateAPIView):
    #if answer receive table no.3 is str value, 
    # find a way to return that value 
    
    pass    

