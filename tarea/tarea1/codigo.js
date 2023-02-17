const montoInicial = parseFloat(prompt('Ingrese el monto inicial de la cuenta de ahorros:'));
const meses = 12;

const interesMensual = 0.0125;
let saldo = montoInicial;
for (let i = 1; i <= meses; i++) {
  saldo += 250;
  saldo += saldo * interesMensual;
}
const interesAnual = saldo - montoInicial - (meses * 250);

document.write(`El saldo final a fin de año es: ${saldo.toFixed(2)} bolívares.`);
document.write("<br>")
document.write(`El interés acumulado a fin de año es: ${interesAnual.toFixed(2)} bolívares.`);