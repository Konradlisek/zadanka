const numbers = [1, 2, 3, 4, 5];

function firstNumber(array) {
  const newNumber = array.shift();
  console.log(`${newNumber}`);
}

firstNumber(numbers);
