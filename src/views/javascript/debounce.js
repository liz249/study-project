function debounce(fun, timeout) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.bind(this, ...args);
    }, timeout);
  };
}

function throttle(fun, timeout) {
  let flag = true;

  return function (...args) {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fun.bind(this, ...args);
      flag = true;
    }, timeout);
  };
}
