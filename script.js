const animals = [
    { name: 'Waffles', species: 'dog' },
    { name: 'Fluffy', species: 'cat' },
    { name: 'Spelunky', species: 'dog' },
    { name: 'Hank', species: 'cat' },
    { name: 'Mia', species: 'dog' },
    { name: 'Bella', species: 'cat' },
    { name: 'Chloe', species: 'dog' },
    { name: 'Daisy', species: 'dog' },
    { name: 'Luna', species: 'cat' }
];

const animalList = document.querySelector('.animal-list');

const animalListFiltered = animals.filter(
    animal => animal.species === 'cat' 
);

animalList.innerHTML = animalListFiltered.map(
    animal => `<li>${animal.name} >> ${animal.species}</li>`
).join('');