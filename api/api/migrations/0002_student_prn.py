# Generated by Django 3.2.8 on 2022-04-25 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='prn',
            field=models.CharField(default='xx', max_length=100),
            preserve_default=False,
        ),
    ]
