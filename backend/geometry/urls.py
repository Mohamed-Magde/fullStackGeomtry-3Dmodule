
from django.urls import path

from rest_framework.urlpatterns import format_suffix_patterns

from geometry import views

urlpatterns = [

    path('geometry/', views.GeometryList.as_view()),
    path('geometry/<int:pk>/', views.GeometryDetail.as_view()),

]
