
from rest_framework import serializers
from .models import Geometry


class GeometrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Geometry
        fields = ('id', 'title', 'width', 'height', 'depth', "color",
                  "wireFrame", "size", "animationX", "animationY")
