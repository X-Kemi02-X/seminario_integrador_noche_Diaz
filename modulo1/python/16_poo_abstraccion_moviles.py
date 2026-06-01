# abstraccion_accesorios.py
from abc import ABC, abstractmethod

class Accesorio(ABC):
    def __init__(self, material="plastico"):
        self.material = material

    @abstractmethod
    def precio_final(self) -> float:
        pass

    @abstractmethod
    def garantia_meses(self) -> int:
        pass

    def describir(self) -> str:
        return (f"{self.__class__.__name__} {self.material}: "
                f"precio=${self.precio_final():.2f}, garantia={self.garantia_meses()} meses")

class Funda(Accesorio):
    def __init__(self, material="silicona", precio_base=15):
        super().__init__(material)
        self.precio_base = precio_base

    def precio_final(self):
        return self.precio_base * 1.12

    def garantia_meses(self):
        return 6

class Cargador(Accesorio):
    def __init__(self, tipo="USB-C", precio_base=25):
        super().__init__("plastico")
        self.tipo = tipo
        self.precio_base = precio_base

    def precio_final(self):
        return self.precio_base * 1.08

    def garantia_meses(self):
        return 12

class Audifonos(Accesorio):
    def __init__(self, inalambrico=True, precio_base=40):
        super().__init__("metal")
        self.inalambrico = inalambrico
        self.precio_base = precio_base

    def precio_final(self):
        recargo = 1.15 if self.inalambrico else 1.0
        return self.precio_base * recargo

    def garantia_meses(self):
        return 3

accesorios = [Funda("silicona", 20), Cargador("USB-C", 30), Audifonos(True, 50)]

for acc in accesorios:
    print(acc.describir())

total_accesorios = sum(a.precio_final() for a in accesorios)
print(f"Total accesorios: ${total_accesorios:.2f}")
