from rest_framework import serializers
from .models import Flow

class FlowSerializer(serializers.ModelSerializer):
    class Meta:
        model= Flow
        fields= (
            'id',
            'amount',
            'type',
            'month',
            'year',
            'created_at',
            'updated_at'
        )
