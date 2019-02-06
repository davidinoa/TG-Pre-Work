// The pattern we use to export modules is thus: define an object to represent the module, add data or behavior to the module, and export the module.

const Airplane = {};
Airplane.myAirplane = 'StarJet';

module.exports = Airplane;
