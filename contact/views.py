from django.db.models import fields
from django.forms.models import modelformset_factory
from django.shortcuts import render
from contact.models import Contact
from contact.forms import ContactForm
from django.http import HttpResponseRedirect
from django.forms import  modelformset_factory
# Create your views here.
def contact(request):
    context={}
    contactset=modelformset_factory(Contact, fields=['name','phone','email','subject','message'], extra=1)
    formset=contactset(request.POST or None)
    if formset.is_valid():
        formset.save()
    context['form']=formset
    return render(request,'contact/contact.html',context)