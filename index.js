const Events = require('events');
const timer = require('./timer');
const Log4js = require('log4js');
const appenders = require('./appenders.json');
Log4js.configure(appenders);

(async () => {
  const logger = Log4js.getLogger();
  logger.debug('Program started...');
  const logEvent = new Events();
  logEvent.on('step', data => logger.info(`step ${data}`));

  const done = await timer(10, 0.5, logEvent);
  logger.error(done);
  logger.debug('Program ended!');
})();
