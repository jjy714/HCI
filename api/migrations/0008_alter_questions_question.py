# Generated by Django 4.1 on 2024-04-03 22:11

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0007_alter_questions_question"),
    ]

    operations = [
        migrations.AlterField(
            model_name="questions",
            name="question",
            field=models.TextField(max_length=300),
        ),
    ]
