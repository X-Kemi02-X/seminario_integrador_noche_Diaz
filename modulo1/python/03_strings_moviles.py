cadena_string="Celular", "Marca", "Modelo", "Precio"
print(cadena_string)
print("Celular", "Marca", "Modelo", "Precio")
print("Celular", "Marca", "Modelo", "Precio", sep=", ")
print("Samsung", "Apple", "Xiaomi", "Motorola", sep=" - " )
print("Samsung", "Apple", "Xiaomi", "Motorola", sep="\n" )
print("Samsung", "Apple", "Xiaomi", "Motorola", sep=" - " )
print("Samsung", "Apple", "Xiaomi", "Motorola", end=" | " )
print("Samsung", "Apple", "Xiaomi", "Motorola", end=" | " )

marca="Samsung"
precio=899
print(marca, precio)
marca_precio=f"Marca: {marca}, ${precio}"
print(marca_precio)
print(f"Marca: {marca}, ${precio}")
print(f"Doble de {precio} es {precio*2}")
print(f"{'iPhone 16':>15}")
iva=0.15
print(f"{iva:.2f}")
print(f"{15000000:,}")
