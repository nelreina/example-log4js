const Events = require('events');

let count = 0;
const iteration = 3;
const seconds = 1;

const timer = (iteration, seconds, evt) =>
  new Promise((resolve, reject) => {
    const intv = setInterval(() => {
      ++count;
      evt.emit('log', count);
      if (count === iteration) {
        clearInterval(intv);
        resolve('Timer is done!');
      }
    }, seconds * 1000);
  });

(async () => {
  console.info('Program started...');

  const logEvent = new Events();
  logEvent.on('log', data => console.info(`Logging ${data}`));

  const done = await timer(iteration, seconds, logEvent);

  console.info('Program ended!');
})();
