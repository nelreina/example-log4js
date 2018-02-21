const Events = require('events');
const timer = require('./timer');
const Log4js = require('log4js');
Log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'timer.log' }
  },
  categories: { default: { appenders: ['console', 'file'], level: 'debug' } }
});

(async () => {
  const logger = Log4js.getLogger();
  logger.debug('Program started...');
  const logEvent = new Events();
  logEvent.on('step', data => logger.info(`step ${data}`));

  const done = await timer(10, 0.5, logEvent);
  logger.info(done);
  logger.debug('Program ended!');
})();
