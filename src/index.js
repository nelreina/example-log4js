const Timer = require('./timer');
const Log4js = require('log4js');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const { iteration, seconds } = args;
Log4js.configure('./log4js.json');
const timer = new Timer();
(async () => {
  const logger = Log4js.getLogger('L');
  logger.debug('Program started...');
  logger.debug(args);
  timer.on('step', data => logger.info(`step ${data}`));
  if (iteration && seconds) {
    const done = await timer.run(iteration, seconds);
    logger.info(done);
  } else {
    logger.error('Program params are required!');
    logger.error('Usage e.g "node src/index --iteration=1 --seconds=1"');
  }
  logger.debug('Program ended!');
})();
