# Generated by Django 4.1 on 2024-04-03 18:52

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0006_alter_questions_answerfromanstable"),
    ]

    operations = [
        migrations.AlterField(
            model_name="questions",
            name="question",
            field=models.TextField(editable=False, max_length=300),
        ),
    ]
