from unicodedata import category
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status,generics
from .serializers import *
from rest_framework.parsers import MultiPartParser, FormParser


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer 



@api_view(['POST'])
def registerUser(request):
    data=request.data
    try:
        user=User.objects.create(
            full_name=data['full_name'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer=UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    except:
        message={'details':'User with this email already exist'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


class add_product(generics.ListCreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    model=SingleProduct
    queryset=SingleProduct.objects.all()
    serializer_class=SingleProductSerializer
    
    def create(self,request):
        try:
            data=request.data
            files = request.FILES.getlist('file_content')
            if data['name'] and data['price'] and data['SKU'] and files:
                cat_id=data['category'] 
                category=Category.objects.get(id=cat_id)
                
                user=request.user   
                product=SingleProduct.objects.create(user=user,name=data['name'],SKU=data['SKU'],brand=data['brand'],color=data['color'],size=data['size'], category=category,description=data['description'],price=data['price'])             
            for file in files:       
                content = ImgFile.objects.create(media=file,file_content=product)
                    
            serializers=SingleProductSerializer(product, many=False)

            return Response(serializers.data)
        except Exception as e:
            print('hello123')
            print(e)
            print('hello')
            data=request.data
            files = request.FILES.getlist('file_content')
            
            if data['name'] and data['price'] and not data['SKU']:
                message={"details":'SKU field can not be empty'}
            elif data['name'] and data['SKU'] and not data['price']:
                message={"details":'Price field can not be empty'}
            elif data['price'] and data['SKU'] and not data['name']:
                message={"details":'Name field can not be empty'}
            elif not files:
                message={"details":'Image Field empty'}
            else:
                message={"details":'Product add failed, multiple field empty'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def all_product(request):
    products=SingleProduct.objects.all().order_by('-createdAt')
    serializer=SingleProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def category(request):
    cate=Category.objects.all()
    serializer=CategorySerializer(cate, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request,pk):
    product=SingleProduct.objects.get(id=pk)
    serializer=SingleProductSerializer(product, many=False)
    return Response(serializer.data)