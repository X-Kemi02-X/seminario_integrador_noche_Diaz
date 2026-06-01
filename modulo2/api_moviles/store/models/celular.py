from django.db import models


class Celular(models.Model):
    marca      = models.CharField(max_length=100)
    modelo     = models.CharField(max_length=200)
    precio     = models.DecimalField(max_digits=10, decimal_places=2)
    stock      = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['marca', 'modelo']
        verbose_name_plural = 'Celulares'

    def __str__(self):
        return f'{self.marca} {self.modelo}'
