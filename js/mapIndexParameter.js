const animals = [
    { name: 'Waffles', species: 'beaver' },
    { name: 'Fluffy', species: 'duck' },
    { name: 'Spelunky', species: 'boar' },
    { name: 'Hank', species: 'groundhog' },
    { name: 'Mia', species: 'bee' },
    { name: 'Bella', species: 'hornet' },
    { name: 'Chloe', species: 'pig' },
    { name: 'Daisy', species: 'dog' },
    { name: 'Luna', species: 'cat' }
];

const sentences = animals.map(
    (animal, index) => 
        `${animal.name} the ${animal.species} is number ${index + 1} in the list.`
    );

console.log(sentences);