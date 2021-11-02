from django.db import models

# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=255)
    phone =models.CharField(max_length=11)
    email=models.EmailField()
    subject=models.CharField(max_length=50)
    message=models.TextField()
    time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name