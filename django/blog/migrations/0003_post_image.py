# Generated by Django 3.1.1 on 2020-09-22 13:35

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20200914_1537'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(default='posts/default.jpg', upload_to=blog.models.upload_to, verbose_name='Image'),
        ),
    ]
