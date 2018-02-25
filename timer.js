const Events = require('events');
const Emmiter = new Events();

const timerRun = (iteration, seconds, evt) =>
  new Promise((resolve, reject) => {
    let count = 0;

    const intv = setInterval(() => {
      ++count;
      evt.emit('step', count);
      if (count === iteration) {
        clearInterval(intv);
        resolve('BOOM!!!');
      }
    }, seconds * 1000);
  });
class Timer extends Events {
  run(iteration, seconds) {
    return timerRun(iteration, seconds, this);
  }
}
module.exports = Timer;
