from django.db import models
from django.conf import settings
from django.urls import reverse
# Create your models here.
class Post(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    body=models.TextField()
    date=models.DateTimeField(auto_now_add=True)
    image=models.ImageField()

    def __str__(self) -> str:
        return self.title

class Comment(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE,related_name='comments')
    author=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    body=models.TextField()
    date=models.DateTimeField(auto_now_add=True)