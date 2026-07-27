from django.urls import path, include
from rest_framework.routers import DefaultRouter

from store.views.celular import CelularViewSet

router = DefaultRouter()
router.register('moviles', CelularViewSet, basename='celular')

urlpatterns = [
    path('', include(router.urls)),
]
