// lib/math-lib.js
function esNumero(val) {
  return typeof val === 'number' && !isNaN(val);
}

function redondear2(num) {
  return Math.round(num * 100) / 100;
}

function aNumero(val) {
  const n = Number(val);
  return esNumero(n) ? n : null;
}

module.exports = { esNumero, redondear2, aNumero };
