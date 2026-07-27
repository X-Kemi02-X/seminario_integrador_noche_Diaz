print("Codicional if")
print("if simple")
stock=3
if stock>0:
    print("Producto disponible")

print("if else - dos caminos")
saldo=25
if saldo>=50:
    print("Compra permitida")
else:
    print("Saldo insuficiente")

print("if multiples condiciones")
temperatura=32
if temperatura<10:
    print("Hace frio")
elif temperatura<25:
    print("Clima templado")
else:
    print("Hace calor")

print("if condiciones anidadas")
conexion=True
token_valido=False
if conexion:
    if token_valido:
        print("Acceso a la api")
    else:
        print("Token invalido")
else:
    print("Sin conexion")

print("if con operadores logicos")
documento=True
pago=True
if documento and pago:
    print("Inscripcion Confirmada")

es_vip=False
tiene_invitacion=True
if es_vip or tiene_invitacion:
    print("Puede entrar al evento")

bloqueado=False
if not bloqueado:
    print("Usuario habilitado")


## Ejercicio
print("Membresia")

usuario = input("¿Su membresía es gratis o premium?: ")
pago = input("¿Ha pagado su membresía? (si/no): ")
if usuario == "premium":
    if pago == "si":
        print("Acceso completo concedido")
    elif pago == "no":
        print("Su cuenta es Premium, pero debe pagar")
if usuario == "gratis":
    print("Acceso limitado (Cuenta gratuita).")
else:
    print("Opción no válida. Por favor, verifique sus datos.")


