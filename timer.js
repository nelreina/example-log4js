module.exports = (iteration, seconds, evt) =>
  new Promise((resolve, reject) => {
    let count = 0;

    const intv = setInterval(() => {
      ++count;
      evt.emit('step', count);
      if (count === iteration) {
        clearInterval(intv);
        resolve('Timer is done!');
      }
    }, seconds * 1000);
  });
