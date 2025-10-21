// lib/input.js
const readline = require('readline');
const { aNumero } = require('./math-lib');

function preguntar(rl, texto) {
  return new Promise(resolve => rl.question(texto, ans => resolve(ans.trim())));
}

async function obtenerDatos() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  console.log('\n--- ALCOHOLÍMETRO INTERACTIVO ---');
  const pesoStr = await preguntar(rl, 'Ingrese su peso (kg): ');
  const sexo = await preguntar(rl, 'Ingrese su sexo (H/M): ');
  const tragosStr = await preguntar(rl, '¿Cuántos tragos estándar ha consumido?: ');
  const horasStr = await preguntar(rl, '¿Hace cuántas horas fue su último trago?: ');

  rl.close();

  return {
    peso: aNumero(pesoStr),
    sexo: sexo.toLowerCase(),
    tragos: aNumero(tragosStr),
    horas: aNumero(horasStr)
  };
}

module.exports = { obtenerDatos };
