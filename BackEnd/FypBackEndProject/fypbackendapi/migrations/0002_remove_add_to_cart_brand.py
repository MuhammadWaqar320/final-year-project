# Generated by Django 3.2.6 on 2022-02-21 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fypbackendapi', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='add_to_cart',
            name='brand',
        ),
    ]
