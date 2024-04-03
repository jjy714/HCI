from django.urls import path
from . import views

urlpatterns = [
    
    path('/questions/<str:id>', views.QuestiontSend.as_view(), name='questions'),
    path('/answers/<str:id', views.ReceiveAnswers.as_view(), name='answers'),
]