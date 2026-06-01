from django.contrib import admin
from store.models import Celular


@admin.register(Celular)
class CelularAdmin(admin.ModelAdmin):
    list_display  = ['id', 'marca', 'modelo', 'precio', 'stock']
    list_filter   = ['marca']
    search_fields = ['marca', 'modelo']
    list_editable = ['precio', 'stock']
