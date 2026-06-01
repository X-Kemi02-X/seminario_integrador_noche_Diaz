print("Condicional if - Inventario de Celulares")
print("if simple")
stock=3
if stock>0:
    print("Celular disponible en inventario")

print("if else - dos caminos")
presupuesto=25
if presupuesto>=500:
    print("Compra de celular permitida")
else:
    print("Presupuesto insuficiente")

print("if multiples condiciones")
precio_celular=32
if precio_celular<200:
    print("Celular de gama baja")
elif precio_celular<600:
    print("Celular de gama media")
else:
    print("Celular de gama alta")

print("if condiciones anidadas")
conexion_internet=True
pago_confirmado=False
if conexion_internet:
    if pago_confirmado:
        print("Procesando venta del celular")
    else:
        print("Pago pendiente")
else:
    print("Sin conexion al sistema")

print("if con operadores logicos")
documento_identidad=True
pago_realizado=True
if documento_identidad and pago_realizado:
    print("Venta de celular Confirmada")

es_cliente_vip=False
tiene_promocion=True
if es_cliente_vip or tiene_promocion:
    print("Puede acceder al descuento")

celular_bloqueado=False
if not celular_bloqueado:
    print("Celular habilitado para venta")


## Ejercicio
print("Membresia - Tienda de Celulares")

usuario = input("Su membresia es basica o premium?: ")
pago = input("Ha pagado su membresia? (si/no): ")
if usuario == "premium":
    if pago == "si":
        print("Descuento especial del 15% en celulares")
    elif pago == "no":
        print("Su membresia es Premium, pero debe pagar")
if usuario == "basica":
    print("Precio regular sin descuento.")
else:
    print("Opcion no valida. Verifique sus datos.")
