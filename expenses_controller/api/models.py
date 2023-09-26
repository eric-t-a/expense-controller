from django.db import models

class Flow(models.Model):
    amount = models.FloatField()
    type = models.CharField(max_length=10)
    month = models.CharField(max_length=2)
    year = models.CharField(max_length=4)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
