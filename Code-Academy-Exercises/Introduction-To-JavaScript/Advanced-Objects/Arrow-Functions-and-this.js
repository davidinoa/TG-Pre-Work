const robot = {
  energyLevel: 100,
  checkEnergy: function() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();

// Arrow functions inherently bind, or tie, an already defined this value to the function itself that is not the calling object.
