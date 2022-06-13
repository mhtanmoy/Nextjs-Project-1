from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields= ['id','email','full_name','is_Admin']

class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)


    class Meta:
        model = User
        fields= ['id','email','full_name','token','isAdmin']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)


class ImgFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImgFile
        fields = '__all__'

class SingleProductSerializer(serializers.ModelSerializer):
    img=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = SingleProduct
        fields= '__all__'

    def get_img(self,obj):
        img=obj.imgfile_set.all()
        serializer=ImgFileSerializer(img, many=True)
        return serializer.data


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


