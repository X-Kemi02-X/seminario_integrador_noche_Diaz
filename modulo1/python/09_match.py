print("Match - case")
print("Comandos iniciar/parar/reiniciar")
comando=input("").lower()
match comando:
    case "iniciar":
        print("Sistema iniciado...")
    case "parar":
        print("Sistema deteniendose...")
    case "reinicar":
        print("Sistema reiniciandose...")
    case _:
        print("Comando no valido")


print("Match - con codiciones")
numero=int(input("Incluya el numero"))
match numero:
    case n if n<0:
        print(f"{n} es negativo")
    case 0:
        print("Es cero")
    case n if n%2==0:
        print(f"el numero {n} es positivo y par")
    case n:
        print(f"El numero {n} no valido")