# Generated by Django 4.2 on 2023-04-27 13:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('soap_app', '0005_subscribers'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='UserApp',
        ),
    ]
