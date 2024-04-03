from django.urls import path
from . import views

urlpatterns = [
    path('questions/<str:id>', views.QuestionSend.as_view(), name='questions'),
    path('answers/', views.QuestionSend.as_view(), name='answers'),
    path('foods/<str:id>', views.ReceiveAnswers.as_view(), name="result-food"),
]