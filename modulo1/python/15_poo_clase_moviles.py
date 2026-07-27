# clase-celular.py

class Celular:
    categoria = "Smartphone"

    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.precio = 0.0

    def describir(self):
        return f"Celular: {self.marca} {self.modelo}"

    def aplicar_descuento(self, porcentaje):
        descuento = self.precio * porcentaje / 100
        self.precio -= descuento
        print(f"Nuevo precio de {self.marca} {self.modelo}: ${self.precio:.2f}")

    def __str__(self):
        return f"Celular({self.marca}, {self.modelo})"

    def __repr__(self):
        return f"Celular(marca={self.marca!r}, modelo={self.modelo!r})"

samsung = Celular("Samsung", "Galaxy S24")
apple   = Celular("Apple", "iPhone 16")

samsung.precio = 899.99
apple.precio = 1099.99

print(samsung.describir())
print(apple.describir())
samsung.aplicar_descuento(10)
print(str(samsung))
print(repr(samsung))
print(Celular.categoria)
