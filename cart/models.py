from django.db import models
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.db.models.aggregates import Sum
from product.models import Product
# Create your models here.
class Cart(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    date_cart=models.DateTimeField(auto_now_add=True)
    complete=models.BooleanField(default=False, null=True,blank=False)
    transaction_id=models.CharField(max_length=200,null=True)

    def __str__(self):
        return str(self.user)
    @property
    def get_cart_total(self):
        cartitems=self.cartitem_set.all()
        total=sum([item.get_total for item in cartitems])
        return total

    @property
    def get_cart_item(self):
        cartitems=self.cartitem_set.all()
        total=sum([item.qunatity for item in cartitems])
        return total
    @property
    def shipping(self):
        shipping=False
        cartitem=self.cartitem_set.all()
        for i in cartitem:
            if i.product.active==True:
                shipping=True
        return shipping


class CartItem(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    cart=models.ForeignKey(Cart,on_delete=models.CASCADE)
    qunatity=models.IntegerField(default=0,null=True,blank=True)
    date_added=models.DateTimeField(auto_now_add=True)

    @property
    def get_total(self):
        total=self.product.price*self.qunatity
        return total


