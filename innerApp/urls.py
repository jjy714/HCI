from django.urls import path
from . import views

urlpatterns=[
    path("", views.home, name="home"),
    path("questions/", views.question_ask, name="question")
    path("aboutus/", views.about_us, name="about_us")
]
