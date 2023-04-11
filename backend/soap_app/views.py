from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.core import serializers
from .models import User as User

def send_the_homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST','GET'])
def sign_up(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST','GET'])
def login(request):
    print(request.data)
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
