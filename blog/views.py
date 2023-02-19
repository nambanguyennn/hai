from django.shortcuts import render
from django.views.generic import ListView
from blog.models import Post
from blog.forms import CommentForm
from django.http import HttpResponseRedirect
# Create your views here.
class PostListView(ListView):
    queryset=Post.objects.all().order_by("-date")
    template_name='blog/blog.html'
    context_object_name='Posts'
    paginate_by=12
    
def post(request,pk):
    post=Post.objects.get(pk=pk)
    form=CommentForm()
    if request.method=='POST':
        form=CommentForm(request.POST,author=request.user,post=post)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(request.path)
    return render(request,'blog/post.html',{"post":post,"form":form})