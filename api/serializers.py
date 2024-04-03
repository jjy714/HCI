from rest_framework import serializers
from .models import Question, Answer, foods

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'
class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = foods
        fields = '__all__'
        
