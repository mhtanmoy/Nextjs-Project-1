from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("User must have an Email")
        if not password:
            raise ValueError("User must have an Password")

        user = self.model(
            email= self.normalize_email(email)
        )
        user.set_password(password)
        user.is_admin = False
        user.is_staff = False
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError("User must have an Email")
        if not password:
            raise ValueError("User must have an Password")

        user = self.model(
            email= self.normalize_email(email)
        )
        user.set_password(password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractUser):
    full_name = models.CharField(max_length=300)
    email = models.EmailField(max_length=300, unique=True)
    password = models.CharField(max_length=300)
    isAdmin = models.BooleanField(default=False)

    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()



class Category(models.Model):
    name=models.CharField(max_length=200, null=True, blank=True)


    def __str__(self):
        return self.name

class SingleProduct(models.Model):
    user=models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name=models.CharField(max_length=200, null=True, blank=True)
    SKU=models.CharField(max_length=200, null=True, blank=True)
    brand=models.CharField(max_length=200, null=True, blank=True)
    color=models.CharField(max_length=200, null=True, blank=True)
    size=models.CharField(max_length=200, null=True, blank=True)
    category=models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    description=models.TextField(null=True, blank=True)
    # rating=models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    # numrating=models.IntegerField(null=True, blank=True, default=0) #(total review number)
    price=models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    # countInStock=models.IntegerField(null=True, blank=True, default=0)
    createdAt=models.DateTimeField(auto_now_add=True)
    # _id=models.AutoField(primary_key=True, editable=False)


    def __str__(self):
        return self.name

class ImgFile(models.Model):  
    media = models.FileField(upload_to='images')
    file_content = models.ForeignKey(SingleProduct, on_delete=models.CASCADE, null=True, blank=True)