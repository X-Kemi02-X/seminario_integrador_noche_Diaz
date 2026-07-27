class Temperatura {
    valorCelsius: number;
    valorFahrenheit: number;

  constructor(celsius: number, farenheit: number) {
    this.valorCelsius = celsius;
    this.valorFahrenheit = farenheit;
  }

  aFahrenheit(): number {
    return this.valorFahrenheit * 9 / 5 + 32;
  }

  aCelsius(): Number{
    return (this.valorFahrenheit-32) * 5 / 9;
  }
  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const hervor = new Temperatura(100,0);
const congelacion = new Temperatura(0,0);
const toCelsius = new Temperatura(0,0);

console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K