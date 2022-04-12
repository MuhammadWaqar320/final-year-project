from django.db.models import query
from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ReviewRatingSerializer,OrderSerializer,Add_To_CartSerializer,CategorySerializer,SurveyformSerializer,RecommendationSystemSerializer,CustomerSerializer,SupplierSerializer, SpecialOfferSerializer, ProductSerializer,ContactUsSerializer,ShipperSerializer, SubCategorySerializer
from .models import Category,ReviewRating,SpecialOffer, Order,Product, Shipper, SubCategory,Customer,ContactUs, Supplier,SurveyForm,Add_To_Cart
from rest_framework import serializers, viewsets
from .ML_model import recommend_product_based_on_plot
# Create your views here.
class ProductView(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
class Add_To_CartView(viewsets.ModelViewSet):
    queryset= Add_To_Cart.objects.all()
    serializer_class= Add_To_CartSerializer
class OrderView(viewsets.ModelViewSet):
    queryset= Order.objects.all()
    serializer_class= OrderSerializer
class SpecialOfferView(viewsets.ModelViewSet):
    queryset=SpecialOffer.objects.all()
    serializer_class=SpecialOfferSerializer
class ShipperView(viewsets.ModelViewSet):
    queryset=Shipper.objects.all()
    serializer_class=ShipperSerializer
class CategoryView(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
class SubCategoryView(viewsets.ModelViewSet):
    queryset=SubCategory.objects.all()
    serializer_class=SubCategorySerializer
class CustomerView(viewsets.ModelViewSet):
    queryset=Customer.objects.all()
    serializer_class=CustomerSerializer
class ContactUsView(viewsets.ModelViewSet):
    queryset=ContactUs.objects.all()
    serializer_class=ContactUsSerializer
class SupplierView(viewsets.ModelViewSet):
    queryset=Supplier.objects.all()
    serializer_class=SupplierSerializer
class ReviewRatingView(viewsets.ModelViewSet):
    queryset=ReviewRating.objects.all()
    serializer_class=ReviewRatingSerializer
class RecommendationSystemView(viewsets.ModelViewSet):
    serializer_class=RecommendationSystemSerializer
    queryset=Product.objects.all()
    def retrieve(self, request, *args, **kwargs):
        params=kwargs
        Recommended_Products=recommend_product_based_on_plot(params['pk'])
        return Response(Recommended_Products)
class SurveyformView(viewsets.ModelViewSet):
    queryset=SurveyForm.objects.all()
    serializer_class=SurveyformSerializer
