import time
from asyncio import timeout
from ftplib import print_line

print("funciones en python")
print("funcion basica")
def saludar():
    print("Hola dedsde la UTE")

saludar()
print("funcion con parametro")
def saludarConNombre(nombre):
    print(f"Hola: {nombre}, Que tal?")

saludarConNombre("Elizabeth")
saludarConNombre("Kevin")

print("funcion por posicion y por nombre")
def presentar(nombre, edad, ciudad):
    print(f"Señor(a): {nombre}, edad: {edad}, ciudad: {ciudad}")
presentar("Maria", 26, "Quito")
presentar("Carla", 29, "Guayaquil")
presentar("Elizabeth", 20, "Quito")
presentar(nombre="Pedro", edad=23, ciudad="Guayaquil")

print("funcion con valores de parametros por defecto")
def saludo_con_valores(nombre, saludo="Hola", puntacion="!"):
    print(saludo, nombre, puntacion)
saludo_con_valores("Pedro", "Buenas noches", "...")
saludo_con_valores("Juan", puntacion="...")
saludo_con_valores("Carlos", "Buenas tardes")


print("funcion con parametros posicionales")
def sumar_todo(*args):
    print(f"Paremtros recibidos {args}")
    return sum(args)
print(sumar_todo(1,2,3))
print(sumar_todo(1,2,3,4,5,6,7))
print(sumar_todo(10,20,30))

print("funcion con parametros combinados con posicionales")
def mostrar_info(titulo, *datos):
    print(f"Paremtros recibidos {datos}, {titulo}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")
print(mostrar_info("Frutas", "naranja", "pera", "manzana"))


print("funcion parametros clave valor variables")
def crear_perfil(**kwargs):
    print(f"Parametros recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave} - {valor}")
crear_perfil(nombre="Elizabeth", apellido="Diaz", edad=20, ciudad="Quito")

print("funcion parametros combinacion con todos los tipos")
def configurar(host, *puertos, debug=False, **opciones):
    print(f"Configuracion")
    print(f"Host: {puertos}")
    print(f"Opciones: {opciones}")

configurar("LocalHost", 80, 443, 8080, debug=True, timeout=30, ssl=True)

print("Devolver multiples valores")
def minmax(numeros):
    return min(numeros), max(numeros)
minimo, maximo = minmax([3,23,45654,3,2,3,45])
print("minimo", minimo, "maximo", maximo)
_, maximo = minmax([3,4,67,2,3,45])
print("maximo", maximo)
minimo, _ = minmax([32,34,34,2,3,34])
print("minimo", minimo)



print("Devolver diccionar en el caso de muchos valores")
def analizar(numeros):
    total=sum(numeros)
    n=len(numeros)
    return {
        "total": total,
        "media": total/n if n>0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n,
    }


datos = [12,334,2,3,4453,3,2,3]
stats= analizar(datos)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']}")
print(f"Rango: {stats['minimo']}-{stats['maximo']}")
print(f"Cantidad: {stats['count']}")

print("\nFunciones lambda")
def doble(numero):
    return numero*2
duplicar=lambda x: x*2
print(doble(2))
print(duplicar(3))
suma=lambda a,b: a+b
print(suma(4,5))

