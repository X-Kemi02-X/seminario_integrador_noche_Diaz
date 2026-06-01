# polimorfismo_pagos.py

class Pago:
    def __init__(self, monto, moneda="USD"):
        self.monto  = monto
        self.moneda = moneda

    def procesar(self):
        raise NotImplementedError("Las subclases deben implementar procesar()")

    def __str__(self):
        return f"{self.__class__.__name__} — ${self.monto} {self.moneda}"

class PagoTarjeta(Pago):
    def __init__(self, monto, numero_tarjeta, cuotas=1):
        super().__init__(monto)
        self.numero_tarjeta = numero_tarjeta[-4:]
        self.cuotas = cuotas

    def procesar(self):
        cuota = self.monto / self.cuotas
        return f"Tarjeta terminada en {self.numero_tarjeta}: {self.cuotas} cuotas de ${cuota:.2f}"

class PagoEfectivo(Pago):
    def procesar(self):
        descuento = self.monto * 0.05
        return f"Pago en efectivo: descuento del 5% (${descuento:.2f}) — total ${self.monto - descuento:.2f}"

class PagoTransferencia(Pago):
    def procesar(self):
        return f"Transferencia bancaria: ${self.monto} — comprobante enviado"

class PagoCripto(Pago):
    def __init__(self, monto, moneda="BTC", tasa_cambio=95000):
        super().__init__(monto, moneda)
        self.tasa_cambio = tasa_cambio

    def procesar(self):
        equivalente = self.monto / self.tasa_cambio
        return f"Cripto ({self.moneda}): {equivalente:.6f} BTC a tasa ${self.tasa_cambio}"

def procesar_pagos(pagos: list):
    for pago in pagos:
        print(f"  {pago.procesar()}")

compras = [
    PagoTarjeta(899.99, "1234567890123456", 12),
    PagoEfectivo(349.00),
    PagoTransferencia(1299.00),
    PagoCripto(1099.99, "BTC", 95000),
]

print("Procesando pagos de celulares:")
procesar_pagos(compras)

class PagoPayPal:
    def procesar(self):   return "PayPal: redirigiendo a autenticacion..."
    def confirmar(self):  return "PayPal: pago confirmado"

class PagoApp:
    def procesar(self):   return "App: escaneando codigo QR..."
    def confirmar(self):  return "App: pago exitoso"

class PagoBilletera:
    def procesar(self):   return "Billetera virtual: saldo suficiente..."
    def confirmar(self):  return "Billetera: transaccion completada"

def procesar_alternativo(medio):
    resultado = medio.procesar()
    print(f"Procesando: {resultado}")
    print(f"Finalizado: {medio.confirmar()}")

for medio in [PagoPayPal(), PagoApp(), PagoBilletera()]:
    procesar_alternativo(medio)
