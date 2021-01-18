let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введите число, большее 100?", 0);
   if (input) numbers.push(input);

} while (input !== null);

  for (let sum of numbers) {
      total += +sum;
  };
     console.log(total);
