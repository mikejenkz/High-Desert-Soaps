from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.send_the_homepage),
    path('sign-up/', views.sign_up),
    path('sign-in/', views.sign_in),
    path('home/', views.send_the_homepage),
    path("shopping-cart/", views.send_the_homepage),
    path("products/",views.send_the_homepage ),
    path('user/curruser/', views.curr_user),
    path('user/logout/', views.user_log_out),
    path('user/login/', views.sign_in),
    path('products/', views.send_the_homepage),
]