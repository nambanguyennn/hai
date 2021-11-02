from django.contrib import admin
from .models import Category,Product,Variation,CommentProduct
# Register your models here.
class CommentInLine(admin.TabularInline):
    model=CommentProduct
class ProductInLine(admin.TabularInline):
    model=Product
class VariationInline(admin.TabularInline):
    model=Variation
class categoryAdmin(admin.ModelAdmin):
    list_display=['title','slug','activate','time']
    list_filter=['time']
    search_fields=['title']
    inlines=[ProductInLine]
class productAdmin(admin.ModelAdmin):
    list_display=['category','variation','title','price','activate']
    list_filter=['time']
    search_fields=['title']
    inlines=[CommentInLine]
admin.site.register(Category,categoryAdmin)
admin.site.register(Product,productAdmin)
admin.site.register(Variation)