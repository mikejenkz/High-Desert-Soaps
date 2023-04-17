from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.core.serializers import serialize

import json

def send_the_homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    newUser = request.META.get('HTTP_COOKIE')
    print(newUser)
    return HttpResponse(theIndex)

@api_view(['POST','GET'])
def sign_up(request):
    print(request.data)
    email = request.data['email']
    password = request.data['password']
    firstName = request.data['firstName']
    lastName = request.data['lastName']

    try:
        # creates new user
        new_user = User.objects.create_user(username = email, password = password, first_name = firstName, last_name = lastName)
        new_user.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})

    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST','GET'])
def sign_in(request):
    #print(request.data)
    email = request.data['email']
    password = request.data['password']
    #print(email + password)
    user = authenticate(username = email, password = password)
    if user is not None and user.is_active:
        try:
            # Creates SessionID
           # print(request._request)
            login(request._request, user)
            return JsonResponse({'email': user.username, 'firstName':user.first_name})
        except Exception as e:
            print(e)
            return JsonResponse({'login':False})
    return JsonResponse({'login':False})


    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)






@api_view(["GET"])
def curr_user(request):
    newUser = request.META.get('HTTP_COOKIE')
    newUser = newUser[10:]

    if request.user.is_authenticated:
        print(request.user)
        #                    format       query                     options
        user_info = serialize("json",  [request.user], fields = ['username', 'first_name'])
        #print(user_info)
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":newUser})
    

@api_view(['POST'])
def user_log_out(request):
    try:
        # Removes SessionID
        logout(request)
        return JsonResponse({"logout":True})
    except Exception as e:
        print(e)
        return JsonResponse({"logout":False})

