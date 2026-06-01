from types import NoneType

MAX_STOCK=50
marca="Samsung"
modelo="Galaxy S24"
precio=899.99
disponible=True
garantia=None

print(marca, "tipo", type(marca))
print(modelo, "tipo", type(modelo))
print(precio, "tipo", type(precio))
print(disponible, "tipo", type(disponible))
print(garantia, "tipo", type(garantia))



marca_equipo: str="Samsung"
modelo_equipo: int="Galaxy S24"
precio_equipo: int=899.99
equipo_disponible: bool=True
garantia_equipo: NoneType=None

print(marca_equipo, "tipo", type(marca_equipo))
print(modelo_equipo, "tipo", type(modelo_equipo))
print(precio_equipo, "tipo", type(precio_equipo))
print(equipo_disponible, "tipo", type(equipo_disponible))
print(garantia_equipo, "tipo", type(garantia_equipo))
