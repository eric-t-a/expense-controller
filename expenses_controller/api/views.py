from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import FlowSerializer
from .models import Flow

class FlowView(generics.CreateAPIView):
    queryset = Flow.objects.all()
    serializer_class = FlowSerializer
