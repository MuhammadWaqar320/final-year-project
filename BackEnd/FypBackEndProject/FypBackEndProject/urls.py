"""FypBackEndProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls.static import static
from django.conf import settings
# from fypbackendapi.models import Customer
from fypbackendapi.views import OrderView,CategoryView,ReviewRatingView,SurveyformView,Add_To_CartView,RecommendationSystemView,ProductView,SupplierView,SpecialOfferView,ShipperView,CustomerView,SubCategoryView,ContactUsView
from rest_framework import routers
from django.contrib import admin
from django.urls import path,include
route=routers.DefaultRouter()
route.register(r'api/products',ProductView,basename="productview")
route.register(r'api/events', SpecialOfferView)
route.register(r'api/order', OrderView)
route.register(r'api/shipper',ShipperView)
route.register(r'api/category',CategoryView)
route.register(r'api/customer',CustomerView)
route.register(r'api/subcategory',SubCategoryView)
route.register(r'api/contactus',ContactUsView)
route.register(r'api/supplier',SupplierView)
route.register(r'api/search',RecommendationSystemView)
route.register(r'api/survey',SurveyformView)
route.register(r'api/reviews_rating',ReviewRatingView)
route.register(r'api/addTocart', Add_To_CartView)
urlpatterns = [
    path('admin/',admin.site.urls),
    path(r'',include(route.urls)),
    path(r'api/', include('rest_framework.urls', namespace='rest_framework'))
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)







