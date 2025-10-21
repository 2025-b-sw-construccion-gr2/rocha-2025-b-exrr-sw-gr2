// lib/alcohol-lib.js
const { redondear2, esNumero } = require('./math-lib');

function calcularBAC(pesoKg, tragos, horas, sexo) {
  if (![pesoKg, tragos, horas].every(esNumero))
    throw new Error('Datos numéricos inválidos.');

  // Un trago estándar ≈ 14 gramos de alcohol puro
  const gramosAlcohol = tragos * 14;
  const pesoGramos = pesoKg * 1000;
  const coef = sexo.toLowerCase() === 'h' ? 0.68 : 0.55;

  // Fórmula de Widmark
  let bac = (gramosAlcohol / (pesoGramos * coef)) * 100;
  bac -= 0.015 * horas; // eliminación natural del alcohol
  bac = Math.max(0, bac); // no puede ser negativo

  return redondear2(bac);
}

function estadoLegal(bac) {
  if (bac === 0) return 'Sobrio';
  if (bac < 0.03) return 'Apto para conducir (casi sobrio)';
  if (bac < 0.08) return 'Afectado: No se recomienda conducir';
  return 'Ilegal: No debe conducir';
}

module.exports = { calcularBAC, estadoLegal };
