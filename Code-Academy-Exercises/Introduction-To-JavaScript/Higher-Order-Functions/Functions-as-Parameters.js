const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = (num) => num + 2;

const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
  const first = func(val);
  const second = func(val);

  if (first === second) {
    return first;
  } else {
    return 'This function returned inconsistent results';
  }
};

checkConsistentOutput(addTwo, 3);

// We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.
