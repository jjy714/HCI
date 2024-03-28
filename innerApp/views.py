from django.shortcuts import render
from .models import foods, questions
# Create your views here.


def home(request):
    return render(request, "innerApp/home.html", {})


def question_ask(response):
    ls = questions.objects.get(id=1)
    return render(response, "innerApp/question.html", {'questions' : questions.question})


def about_us(response):
    return render(response, "innerApp/aboutus.html")