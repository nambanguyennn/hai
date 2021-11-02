from django.db import models
from django.conf import settings
from cart.models import Cart
# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    cart=models.ForeignKey(Cart, on_delete=models.CASCADE)
    address=models.CharField(max_length=255)
    phome=models.CharField(max_length=255)
    emial=models.CharField(max_length=255)
    order_description=models.TextField()
    date_added=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address

    