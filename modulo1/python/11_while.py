print("Ciclo while")
contador=1
while contador<=5:
    print(contador)
    contador+=1

dato=""
while dato!="salir":
    dato = input("Escriba algo (salir para terminar)")
    print("Escribiste: ",dato)


cantidad=int(input("Cuantos productos compro"))
total=0
contador=1
while contador<=cantidad:
    precio = float(input(f"Precio del producto: {contador}"))
    total+=precio
    contador+=1
print("total ", total)
if total >= 100:
    print("aplica descuento")
else:
    print("no aplica descuento")



cantidad=int(input("Cuantos empleados registrara"))
total=0
contador=1
while contador<=cantidad:
    salario = float(input(f"Salario de cada empleado: {contador}"))
    total+=salario
    contador+=1
print("total ", total)
if total >= 1000:
    print("Gato alto")
else:
    print("Gasto controlado")