const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
  arr[3] = 'MUTATED';
}

function removeElement(newArr) {
  newArr.pop();
}

changeArr(concept);
console.log(concept);

removeElement(concept);
console.log(concept);

// When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.
