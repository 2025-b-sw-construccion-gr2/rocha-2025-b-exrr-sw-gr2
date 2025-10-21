// lib/logger.js
const chalk = require('chalk');

function info(msg) {
  console.log(chalk.cyan('[INFO]'), msg);
}

function success(msg) {
  console.log(chalk.green('[OK]'), msg);
}

function warn(msg) {
  console.log(chalk.yellow('[WARN]'), msg);
}

function error(msg) {
  console.error(chalk.red('[ERROR]'), msg);
}

function resultadoBAC(bac, estado) {
  console.log(chalk.bold('\n--- RESULTADO DEL ALCOHOLÍMETRO ---'));
  console.log(chalk.yellow(`Nivel estimado de alcohol en sangre (BAC): ${bac}%`));
  console.log(chalk.magenta(`Estado: ${estado}`));
  if (bac >= 0.08) {
    console.log(chalk.redBright('\n⚠️  No puede conducir, supera el límite legal.'));
  } else if (bac >= 0.03) {
    console.log(chalk.yellowBright('\n⚠️  Precaución: sus reflejos pueden estar afectados.'));
  } else {
    console.log(chalk.greenBright('\n✅ Está sobrio o dentro del límite seguro.'));
  }
  console.log('------------------------------------\n');
}

module.exports = { info, success, warn, error, resultadoBAC };
