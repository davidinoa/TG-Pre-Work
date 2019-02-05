const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

// In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.
