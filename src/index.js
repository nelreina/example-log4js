const Timer = require('./timer');
const Log4js = require('log4js');
Log4js.configure('./log4js.json');
const timer = new Timer();
(async () => {
  const logger = Log4js.getLogger();
  logger.debug('Program started...');
  timer.on('step', data => logger.info(`step ${data}`));

  const done = await timer.run(100, 0.01);
  logger.info(done);
  logger.debug('Program ended!');
})();
