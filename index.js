const Events = require('events');
const timer = require('./timer');

(async () => {
  console.info('Program started...');

  const logEvent = new Events();
  logEvent.on('step', data => console.info(`step ${data}`));

  const done = await timer(4, 3, logEvent);
  console.info(done);
  console.info('Program ended!');
})();
