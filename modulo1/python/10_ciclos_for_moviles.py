print("Ciclo for - Inventario de Celulares")
print("for basico")

for i in range(1,6):
    print(f"Celular #{i}")
marcas=["Samsung", "Apple", "Xiaomi"]
for marca in marcas:
    print(marca)

print("control de interrupcion")
for i in range(1,10):
    if i==3: continue
    if i==7: break
    print(f"Lote {i}")
else:
    print("Inventario completo")

print("for con range step - Precios escalonados")
for i in range(100, 600, 100):
    print(f"Rango de precio: ${i}")

print("for con range regresivo - Stock")
for i in range(10,0,-1):
    print(f"Unidades restantes: {i}")

print("for con enumerate")
modelos=["Galaxy S24", "iPhone 16", "Redmi Note 13", "Edge 50"]
for indice, modelo in enumerate(modelos):
    print(indice, modelo)


print("for con zip")
precios=[899, 1099, 349, 599]
for modelo, precio in zip(modelos, precios):
    print(modelo, precio)

print("for anidados - Comparativa de especificaciones")

for i in range(1,4):
    for x in range(1,4):
        print(f"Modelo {i}, especificacion {x}")


cantidad=int(input("Ingrese cantidad de celulares a vender"))
total=0
for i in range(1, cantidad+1):
    precio=float(input(f"Precio del celular {i}: "))
    total+=precio
promedio=total/cantidad
print("Promedio de venta: ", promedio)
if promedio >=700:
    print("Venta alta")
else:
    print("Venta baja")
