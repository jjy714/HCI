
from django.urls import path
from . import views

urlpatterns = [
    path("questions/", views.AnsSubmitReceive.as_view(), name="question")
    
    
]