# Generated by Django 3.2.5 on 2021-09-04 08:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('activate', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Variation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('price', models.IntegerField(default=0)),
                ('sale_price', models.IntegerField(default=0)),
                ('inventory', models.IntegerField(default=0)),
                ('activate', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.IntegerField(default=0)),
                ('image', models.ImageField(upload_to='')),
                ('activate', models.BooleanField(default=True)),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.category')),
                ('variation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.variation')),
            ],
        ),
    ]
