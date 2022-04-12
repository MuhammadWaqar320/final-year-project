# username:waqar and password: 1234
# username:zahid and password: 1234
from django.contrib import admin
from .models import Product,Category,SubCategory,SpecialOffer,Shipper,Customer,ContactUs,Supplier,SurveyForm,ReviewRating,Order
# Register your models here.
@admin.register(Product,Category,SubCategory,Shipper,Supplier,SpecialOffer,Customer,ContactUs,ReviewRating,SurveyForm,Order)
class AllModels(admin.ModelAdmin):
    admin.site.index_title="PakElectronics Admin Panel"
    admin.site.site_header="PaKElectronics"
    

