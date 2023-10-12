const myArray = [13, 200, 404, 430, 10];
console.log(myArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
));