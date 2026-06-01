import time
from asyncio import timeout
from ftplib import print_line

print("funciones en python - Sistema de Celulares")
print("funcion basica")
def bienvenida():
    print("Bienvenido a la Tienda de Celulares")

bienvenida()
print("funcion con parametro")
def mostrar_equipo(nombre):
    print(f"Equipo: {nombre}, en stock")

mostrar_equipo("Samsung Galaxy S24")
mostrar_equipo("iPhone 16")

print("funcion por posicion y por nombre")
def registrar_venta(marca, cantidad, vendedor):
    print(f"Vendedor: {vendedor}, marca: {marca}, cantidad: {cantidad}")
registrar_venta("Samsung", 5, "Maria")
registrar_venta("Apple", 3, "Carla")
registrar_venta("Xiaomi", 8, "Elizabeth")
registrar_venta(marca="Motorola", cantidad=4, vendedor="Pedro")

print("funcion con valores de parametros por defecto")
def descripcion_equipo(marca, color="Negro", puntacion="!"):
    print(marca, color, puntacion)
descripcion_equipo("iPhone", "Blanco", "...")
descripcion_equipo("Samsung", puntacion="...")
descripcion_equipo("Xiaomi", "Azul")


print("funcion con parametros posicionales")
def sumar_precios(*args):
    print(f"Precios recibidos {args}")
    return sum(args)
print(sumar_precios(899, 1099, 349))
print(sumar_precios(200, 450, 600, 800, 1200, 1500))
print(sumar_precios(500, 700, 900))

print("funcion con parametros combinados con posicionales")
def mostrar_inventario(titulo, *datos):
    print(f"Datos recibidos {datos}, {titulo}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")
print(mostrar_inventario("Marcas Disponibles", "Samsung", "Apple", "Xiaomi"))


print("funcion parametros clave valor variables")
def crear_ficha(**kwargs):
    print(f"Parametros recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave} - {valor}")
crear_ficha(marca="Samsung", modelo="S24", precio=899, color="Negro")

print("funcion parametros combinacion con todos los tipos")
def configurar_tienda(host, *puertos, debug=False, **opciones):
    print(f"Configuracion de Tienda")
    print(f"Host: {puertos}")
    print(f"Opciones: {opciones}")

configurar_tienda("LocalHost", 80, 443, 8080, debug=True, timeout=30, ssl=True)

print("Devolver multiples valores")
def minmax_precios(precios):
    return min(precios), max(precios)
minimo, maximo = minmax_precios([349, 599, 899, 1099, 1299])
print("precio minimo", minimo, "precio maximo", maximo)
_, maximo = minmax_precios([200, 450, 700, 1000])
print("precio maximo", maximo)
minimo, _ = minmax_precios([150, 300, 500, 800])
print("precio minimo", minimo)



print("Devolver diccionario en el caso de muchos valores")
def analizar_inventario(precios):
    total=sum(precios)
    n=len(precios)
    return {
        "total": total,
        "media": total/n if n>0 else 0,
        "minimo": min(precios) if precios else None,
        "maximo": max(precios) if precios else None,
        "count": n,
    }


datos = [349, 599, 899, 1099, 1299]
stats= analizar_inventario(datos)
print(f"Total: ${stats['total']}")
print(f"Media: ${stats['media']}")
print(f"Rango: ${stats['minimo']}-${stats['maximo']}")
print(f"Cantidad: {stats['count']}")

print("\nFunciones lambda")
def doble_precio(numero):
    return numero*2
duplicar_precio=lambda x: x*2
print(doble_precio(899))
print(duplicar_precio(1099))
suma_precios=lambda a,b: a+b
print(suma_precios(500, 400))
