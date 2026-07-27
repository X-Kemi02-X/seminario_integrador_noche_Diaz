from logging import config

print("Diccionarios - Ficha Tecnica de Celulares")
print("Crear Diccionarios")
vacio={}
celular={"marca": "Samsung", "modelo": "Galaxy S24", "precio": 899}
config=dict(marca="iPhone", modelo="16 Pro", precio=1099)

print(celular["marca"])
celular["modelo"]="Galaxy S25"
print(celular)
del celular["precio"]
print(celular)
print("marca" in celular)
print("modelo" in celular)
print(celular.keys())
print(celular.values())
print(celular.items())
for clave, valor in celular.items():
    print(f"clave: {clave}, valor: {valor}")
