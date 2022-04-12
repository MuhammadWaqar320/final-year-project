from re import M
from django.contrib.admin.decorators import register
from django.db import models
from ckeditor.fields import RichTextField
from django.db.models.deletion import CASCADE
from django.contrib.postgres.fields import ArrayField
from datetime import date
from pytz import timezone
# Create your models here.
class Supplier(models.Model):
    supplier_name=models.CharField(max_length=100)
    supplier_email=models.EmailField(max_length=100)
    supplier_phone_no=models.CharField(max_length=15)
    supplier_address=models.CharField(max_length=100)
    supplier_Regiter_Date=models.DateField(default=date.today)
    supplier_verified=models.BooleanField(default=True)
    def __str__(self):
        return self.supplier_name
class Category(models.Model):
    category_name=models.CharField(max_length=350)
    class Meta:
        verbose_name_plural='Categories'
    def __str__(self):
        return self.category_name
class SubCategory(models.Model):
    subCategory_name=models.CharField(max_length=500)
    verbose_name_plural='SubCategories'
    def __str__(self):
        return self.subCategory_name
class Product(models.Model):
    product_id=models.AutoField(primary_key=True)
    product_name=models.CharField(max_length=500)
    product_price=models.FloatField()
    product_brand=models.CharField(max_length=500)
    product_color=models.CharField(max_length=50)
    product_image=models.ImageField(upload_to='uploads/images',null=True,blank=True)
    product_companyName=models.CharField(max_length=500)
    product_total_stock=models.IntegerField()
    place_of_origin=models.CharField(max_length=200,default="Islamabad")
    product_weight=models.FloatField(default=0.0)
    category=models.ForeignKey(Category,on_delete=CASCADE)
    subCategory=models.ForeignKey(SubCategory,on_delete=CASCADE,default=1)
    supplier=models.ForeignKey(Supplier,on_delete=CASCADE,default=1)
    product_specification=RichTextField(blank=True)
    product_description=models.TextField(blank=True)
    def __str__(self):
        return self.product_name
class SpecialOffer(models.Model):
    offer_name=models.CharField(max_length=150)
    offer_Finish_Time=models.DateTimeField()
    def __str__(self):
        return self.offer_name
class Shipper(models.Model):
    shipper_name=models.CharField(max_length=150)
    shipper_email=models.EmailField(max_length=100)
    shipper_phone_no=models.CharField(max_length=20)
    shipper_image=models.ImageField(upload_to='uploads/images',null=True,blank=True)
    shipper_address=models.CharField(max_length=200)
    shipper_Regiter_Date=models.DateField(default=date.today)
    shipper_verified=models.BooleanField(default=True)
    shipper_detail=models.TextField(default="")
    def __str__(self):
        return self.shipper_name
class Customer(models.Model):
    customer_id=models.AutoField(primary_key=True)
    customer_phone=models.CharField(max_length=20,default="")
    customer_password=models.CharField(max_length=40,default="")
    customer_name=models.CharField(max_length=150)
    customer_email=models.EmailField(max_length=230,default="")
    customer_address=models.CharField(max_length=150,default="")
    customer_city=models.CharField(max_length=150,default="islamabad")
    customer_zipCode=models.IntegerField(default=00000)
    customer_province=models.CharField(max_length=150,default="Punjab")
    def __str__(self):
        return self.customer_name
class ContactUs(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    email=models.EmailField()
    phone_no=models.CharField(max_length=100)
    message=RichTextField(blank=True)
    class Meta:
        verbose_name_plural='Contact Us'
    def __str__(self):
        return self.first_name
class SurveyForm(models.Model):
    survey_id=models.AutoField(primary_key=True)
    Ans_of_Q1=models.CharField(max_length=100,default="")
    Ans_of_Q2=models.CharField(max_length=100,default="")
    Ans_of_Q3=models.CharField(max_length=100,default="")
    Ans_of_Q4=models.CharField(max_length=100,default="")
    Ans_of_Q5=models.CharField(max_length=100,default="")
    Ans_of_Q6=models.CharField(max_length=100,default="")
    Ans_of_Q7=models.CharField(max_length=100,default="")
    Ans_of_Q8=models.CharField(max_length=100,default="")
    customer=models.ForeignKey(Customer,on_delete=CASCADE)
    class Meta:
        verbose_name_plural='Survey Results'
    def __str__(self):
        return "Feedback Answers"
class ReviewRating(models.Model):
    rating=models.FloatField(default=0.0)
    reviews=models.TextField(default="")
    customer_name=models.CharField(max_length=100)
    def __str__(self):
        return "Rated by "+self.customer_name
class Order(models.Model):
    customer=models.CharField(max_length=50)
    Address=models.CharField(max_length=50,null=False,blank=False)
    city=models.CharField(max_length=50,null=False,blank=False)
    province=models.CharField(max_length=50)
    zipcode=models.IntegerField(default=0000)
    Order_Items=ArrayField(models.CharField(max_length=50, blank=True), default=list)
    Payment_id=models.CharField(max_length=200,default="")
    Total_Price=models.IntegerField(default=0)
    OrderDate=models.DateField(default=date.today)
  
    def __str__(self):
        return "Order Placed By "+self.customer
class Add_To_Cart(models.Model):
    product=models.CharField(max_length=100,default="")
    customer=models.CharField(max_length=100,default="")
    price=models.IntegerField(default=1)
    product_id=models.IntegerField(default=1)
    product_Qty=models.IntegerField(default=1)
    def __str__(self):
        return "Cart Item of "+self.customer
