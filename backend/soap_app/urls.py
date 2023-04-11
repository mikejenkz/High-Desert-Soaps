from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.send_the_homepage),
    path('sign-up/', views.sign_up),
    path('sign-in/', views.login),
    path('home/', views.send_the_homepage)
]