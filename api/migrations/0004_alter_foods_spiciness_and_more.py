# Generated by Django 4.1 on 2024-04-02 15:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0003_rename_answer_questions_answerfromanstable_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="foods",
            name="spiciness",
            field=models.BooleanField(),
        ),
        migrations.AlterField(
            model_name="questions",
            name="answerFromAnsTable",
            field=models.IntegerField(null=True),
        ),
    ]
