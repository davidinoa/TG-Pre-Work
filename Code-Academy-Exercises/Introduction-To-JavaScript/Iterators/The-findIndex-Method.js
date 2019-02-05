const animals = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant',
];

const foundAnimal = animals.findIndex((animal) => animal === 'elephant');

const startsWithS = animals.findIndex((animal) => animal[0] === 's');

// Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
