from django.db import models

# Create your models here.


class Geometry(object):
    title = models.CharField(max_length=250)
    width = models.IntegerField(default=100)
    height = models.IntegerField(default=100)
    depth = models.IntegerField(default=100)
    color = models.CharField(max_length=50)
    wireFrame = models.BooleanField(default=True)
    size = models.IntegerField(default=5)
    animationX = models.IntegerField(default=0.01)
    animationY = models.IntegerField(default=0.02)
