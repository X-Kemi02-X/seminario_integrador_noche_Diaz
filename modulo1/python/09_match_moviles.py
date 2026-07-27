print("Match - case - Sistema de Celulares")
print("Acciones: vender/reabastecer/reportar")
comando=input("").lower()
match comando:
    case "vender":
        print("Procesando venta de celular...")
    case "reabastecer":
        print("Actualizando inventario...")
    case "reportar":
        print("Generando reporte de ventas...")
    case _:
        print("Accion no valida en el sistema")


print("Match - con condiciones - Categorias de Celulares")
numero=int(input("Ingrese precio del celular "))
match numero:
    case n if n<200:
        print(f"${n} es gama baja")
    case 0:
        print("Precio no registrado")
    case n if n%2==0:
        print(f"El precio ${n} es de gama media-alta")
    case n:
        print(f"El precio ${n} no clasificado")
