from rest_framework import serializers
from store.models import Celular


class CelularSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Celular
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_precio(self, value):
        if value <= 0:
            raise serializers.ValidationError('El precio debe ser mayor a 0.')
        return value

    def validate_stock(self, value):
        if value < 0:
            raise serializers.ValidationError('El stock no puede ser negativo.')
        return value
