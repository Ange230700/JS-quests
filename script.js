const teamOne = [
    { name: 'Waffles', age: '19' },
    { name: 'Fluffy', age: '14' },
    { name: 'Spelunky', age: '4' },
    { name: 'Hank', age: '11'  },
    { name: 'Mia', age: '34'  },
    { name: 'Bella', age: '8'  },
    { name: 'Chloe', age: '13'  },
    { name: 'Daisy', age: '4'  },
    { name: 'Luna', age: '26'  },
];

const teamTwo = [
    { name: 'Goldie', age: '39' },
    { name: 'Biscuit', age: '25' },
    { name: 'Penny', age: '79' },
    { name: 'Dexter', age: '69' },
    { name: 'Finn', age: '76' },
    { name: 'Duke', age: '59' },
    { name: 'Lucky', age: '19' },
    { name: 'Sam', age: '18' },
    { name: 'Teddy', age: '39' },
];

function checkIfAdult(array) {
    return array.every((person) => person.age >= 18);
}

console.log(checkIfAdult(teamOne));
console.log(checkIfAdult(teamTwo));