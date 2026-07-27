# encapsulamiento_inventario.py

class InventarioCelulares:
    def __init__(self, producto, stock_inicial=0):
        self.producto    = producto
        self.__stock     = stock_inicial
        self.__historial = []
        self.__activo    = True
        self.__registrar(f"Producto '{producto}' registrado con {stock_inicial} unidades")

    @property
    def stock(self):
        return self.__stock

    @property
    def activo(self):
        return self.__activo

    @property
    def historial(self):
        return list(self.__historial)

    def ingresar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.__stock += cantidad
        self.__registrar(f"Ingreso: +{cantidad} unidades")
        return self

    def vender(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.__stock:
            raise ValueError(f"Stock insuficiente (disponible: {self.__stock} unidades)")
        self.__stock -= cantidad
        self.__registrar(f"Venta: -{cantidad} unidades")
        return self

    def transferir(self, destino, cantidad):
        self.vender(cantidad)
        destino.ingresar(cantidad)
        self.__registrar(f"Transferencia a {destino.producto}: -{cantidad} unidades")
        return self

    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Inventario({self.producto}: {self.__stock} unidades)"

s24 = InventarioCelulares("Samsung Galaxy S24", 10)
s25 = InventarioCelulares("Samsung Galaxy S25", 5)

s24.ingresar(15).vender(8)
s24.transferir(s25, 5)

print(s24)
print(s25)
print(f"Stock S24: {s24.stock} unidades")

for entrada in s24.historial:
    print(f"  {entrada}")
