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

const animalList = document.querySelector('.animal-list');

const animalListItems = animals.map(animal => `<li>${animal.name} is a ${animal.species}</li>`).join('');

animalList.innerHTML = animalListItems;