const bobsFollowers = ['Mike', 'Joe', 'Jon', 'Eric'];
const tinasFollowers = ['Mike', 'Joe', 'Jen'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays.
