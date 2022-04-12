from django.db import models
from django.db.models import fields
from rest_framework import serializers

from .models import Order,Category, Customer, SpecialOffer,Product,Shipper, SubCategory, ContactUs,Supplier,ReviewRating,SurveyForm,Add_To_Cart
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'
        depth=1
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Order
        fields='__all__'
        depth=1
class Add_To_CartSerializer(serializers.ModelSerializer):
    class Meta:
        model=Add_To_Cart
        fields='__all__'
        depth=1
class ReviewRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=ReviewRating
        fields='__all__'
# Register your models here.
class SurveyformSerializer(serializers.ModelSerializer):
    class Meta:
        model=SurveyForm
        fields='__all__'
class RecommendationSystemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'
        depth=1
class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model=ContactUs
        fields='__all__'
        depth=1
class SpecialOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model=SpecialOffer
        fields='__all__'
class ShipperSerializer(serializers.ModelSerializer):
    class Meta:
        model=Shipper
        fields='__all__'
class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model=Supplier
        fields='__all__'
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields='__all__'
        depth=1
class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=SubCategory
        fields='__all__'
        depth=1


# class AddToCartSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=AddToCart
#         fields='__all__'
#         depth=1