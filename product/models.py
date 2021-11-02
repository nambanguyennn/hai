from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import CASCADE
from django.db.models.fields.related import ForeignKey
from django.utils.translation import activate
from django.urls import reverse
from django.conf import settings

# Create your models here.
class Category(models.Model):
    title=models.CharField(max_length=255)
    slug=models.CharField(max_length=255,unique=True)
    description=models.TextField()
    time=models.DateTimeField(auto_now_add=True)
    activate=models.BooleanField(default=True)
    class Meta:
        verbose_name_plural = 'categories' 
        
    def get_absolute_url(self):
        return reverse('product:category_list', args=[self.slug])
    def __str__(self):
        return self.title

class Variation(models.Model):
    title=models.CharField(max_length=255)
    price=models.IntegerField(default=0)
    sale_price=models.IntegerField(default=0)
    inventory=models.IntegerField(default=0)
    activate=models.BooleanField(default=True)
class Product(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    variation=models.ForeignKey(Variation,on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    description=models.TextField()
    price=models.IntegerField(default=0)
    image=models.ImageField()
    activate=models.BooleanField(default=True)
    time=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.title)
    def get_absolute_url(self):
        return reverse('product:product_detail', args=[self.title])
    
class CommentProduct(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name='comments')
    author=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    body=models.TextField()
    date=models.DateTimeField(auto_now_add=True)

