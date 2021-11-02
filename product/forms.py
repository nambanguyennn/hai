from django import forms
from django.db import models
from django.db.models import fields
from .models import CommentProduct
class CommentForm(forms.ModelForm):
    def __init__(self,*args,**kwargs):
        self.author=kwargs.pop('author',None)
        self.product=kwargs.pop('product',None)
        super().__init__(*args,**kwargs)
    def save(self, commit=True):
        comment=super().save(commit=False)
        comment.author=self.author
        comment.product=self.product
        comment.save()
    class Meta:
        model=CommentProduct
        fields=['body']