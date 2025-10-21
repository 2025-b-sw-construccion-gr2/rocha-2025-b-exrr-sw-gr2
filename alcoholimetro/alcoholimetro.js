// alcoholimeter.js
const input = require('./lib/input');
const logger = require('./lib/logger');
const alcohol = require('./lib/alcohol-lib');

async function main() {
  logger.info('Bienvenido al simulador de alcoholímetro 🥂');

  try {
    const { peso, sexo, tragos, horas } = await input.obtenerDatos();

    if (!peso || !tragos || !horas || !['h', 'm'].includes(sexo)) {
      return logger.error('Datos inválidos. Verifique su entrada.');
    }

    const bac = alcohol.calcularBAC(peso, tragos, horas, sexo);
    const estado = alcohol.estadoLegal(bac);

    logger.resultadoBAC(bac, estado);
    logger.success('Evaluación completada correctamente.');
  } catch (err) {
    logger.error(err.message);
  }
}

main();
