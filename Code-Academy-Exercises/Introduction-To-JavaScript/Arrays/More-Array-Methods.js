const groceryList = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];

groceryList.shift();
groceryList.unshift('popcorn');

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.
