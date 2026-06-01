print("Ciclo while - Venta de Celulares")
contador=1
while contador<=5:
    print(f"Procesando venta #{contador}")
    contador+=1

accion=""
while accion!="salir":
    accion = input("Accion (vender/stock/salir): ")
    print("Accion seleccionada: ", accion)


cantidad=int(input("Cuantos celulares vendio"))
total=0
contador=1
while contador<=cantidad:
    precio = float(input(f"Precio del celular #{contador}: "))
    total+=precio
    contador+=1
print("Total vendido: $", total)
if total >= 1000:
    print("Meta de ventas alcanzada")
else:
    print("Meta de ventas no alcanzada")



cantidad=int(input("Cuantos modelos registrara en inventario"))
total=0
contador=1
while contador<=cantidad:
    precio = float(input(f"Precio del modelo #{contador}: "))
    total+=precio
    contador+=1
print("Valor total del inventario: $", total)
if total >= 5000:
    print("Inventario de alto valor")
else:
    print("Inventario de valor moderado")
