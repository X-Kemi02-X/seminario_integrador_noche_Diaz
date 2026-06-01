print("Inventario de Celulares - Listas")
print("Crear listas")
vacia=[]
print(vacia)
precios=[100, 200, 300, 400, 500, 600]
marcas=["Samsung", "Apple", "Xiaomi", "Motorola"]
print(marcas)
mixta=["iPhone", 1099, True, "Stock", None, 3.14]
print(mixta)
anidada=[1, 2, [3, 4], 5, 5, [4, 4, [1, 2, 3]]]
print(anidada)

print("Acceso a los elementos de una lista")
print(marcas[1])
print(marcas[-1])
print(marcas[1:3])
print(marcas[::-1])

print("CRUD de una lista - Catalogo de Celulares")
modelos=["Galaxy S24", "iPhone 16", "Redmi Note 13", "Edge 50"]
print(modelos)
modelos.append("Pixel 9")
print(modelos)
modelos.extend(["OnePlus 13", "ZenFone 11"])
modelos[0]="Galaxy S25"
print(modelos)
modelos.remove("Galaxy S25")
print(modelos)
eliminado=modelos.pop()
print(eliminado)
print(modelos)
eliminado=modelos.pop(2)
print(eliminado)
print(modelos)
del modelos[0]
print(modelos)


print("Buscar valores en el catalogo")
print("OnePlus 13" in modelos)
print(modelos.index("OnePlus 13"))
print(modelos.count("OnePlus 13"))

print("Ordenar catalogo por precio")
precios_desordenados=[899, 349, 1299, 599, 450]
print(precios_desordenados)
precios_desordenados.sort()
print(precios_desordenados)
precios_desordenados.sort(reverse=True)
print(precios_desordenados)
ordenada=sorted(precios_desordenados)
print(ordenada)
print(precios_desordenados)
