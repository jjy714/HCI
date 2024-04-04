from rest_framework import serializers
from .models import questions, answers, foods

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = questions
        fields = ["question", "answerFromAnsTable"]
        extra_kwargs = {"questions" : {"read_only": True}}

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = answers
        fields = '__all__'
        
    def create(self, validated_data):
        print(validated_data)

    
    
     
class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = foods
        fields = '__all__'
        
