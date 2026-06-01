# herencia_celulares.py

class DispositivoMovil:
    def __init__(self, marca, modelo, año):
        self.marca  = marca
        self.modelo = modelo
        self.año    = año
        self._bateria = 100

    def usar(self, porcentaje):
        self._bateria = max(0, self._bateria - porcentaje)
        return self

    def cargar(self, porcentaje):
        self._bateria = min(100, self._bateria + porcentaje)
        return self

    def __str__(self):
        return f"{self.marca} {self.modelo} ({self.año}) — bateria {self._bateria}%"

class Smartphone(DispositivoMovil):
    def __init__(self, marca, modelo, año, camara_mp=48):
        super().__init__(marca, modelo, año)
        self.camara_mp = camara_mp

    def tomar_foto(self):
        return f"{self.marca} {self.modelo}: Foto de {self.camara_mp}MP tomada!"

    def __str__(self):
        return f"{super().__str__()} ({self.camara_mp}MP camara)"

class GamaAlta(Smartphone):
    def __init__(self, marca, modelo, año, almacenamiento):
        super().__init__(marca, modelo, año)
        self.__almacenamiento = almacenamiento
        self.__carga_rapida   = True

    def activar_carga_rapida(self):
        if self.__carga_rapida:
            self._bateria = min(100, self._bateria + 30)
            return f"Carga rapida activada en {self.marca} {self.modelo}"
        return "Este equipo no soporta carga rapida"

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Almacenamiento: {self.__almacenamiento}GB | "
                f"Carga rapida: {self.__carga_rapida}")

s24_ultra = GamaAlta("Samsung", "Galaxy S24 Ultra", 2024, 512)
s24_ultra.usar(20)
print(s24_ultra)

print(isinstance(s24_ultra, GamaAlta))
print(isinstance(s24_ultra, Smartphone))
print(isinstance(s24_ultra, DispositivoMovil))
print(isinstance(s24_ultra, GamaAlta))

print(GamaAlta.__mro__)
