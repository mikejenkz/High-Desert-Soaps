# Generated by Django 4.2 on 2023-04-14 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('soap_app', '0002_alter_user_email'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='first_name',
            new_name='firstName',
        ),
    ]
