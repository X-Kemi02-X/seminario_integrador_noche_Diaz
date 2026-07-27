from rest_framework import viewsets
from store.models import Celular
from store.serializers import CelularSerializer


class CelularViewSet(viewsets.ModelViewSet):
    queryset         = Celular.objects.all()
    serializer_class = CelularSerializer
