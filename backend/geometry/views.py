from django.shortcuts import render
from .models import Geometry
from .serializers import GeometrySerializer
from rest_framework import generics


class GeometryList(generics.ListCreateAPIView):
    queryset = Geometry.objects.all()
    serializer_class = GeometrySerializer


class GeometryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Geometry.objects.all()
    serializer_class = GeometrySerializer
