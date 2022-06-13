from django.contrib import admin
from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', views.registerUser ,name="register"),
    path('add/product', views.add_product.as_view() ,name="add-product"),
    path('all-products', views.all_product ,name="all-product"),
    path('product-details/<str:pk>', views.getProduct ,name="get-product"),
    path('category', views.category ,name="category"),
]
