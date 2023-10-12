const animals = [
    { name: 'Waffles', species: 'beaver' , emoji: '🦫' },
    { name: 'Fluffy', species: 'duck', emoji: '🦆' },
    { name: 'Spelunky', species: 'boar', emoji: '🐗' },
    { name: 'Hank', species: 'groundhog', emoji: '🦡' },
    { name: 'Mia', species: 'bee', emoji: '🐝' },
    { name: 'Bella', species: 'hornet', emoji: '🐝' },
    { name: 'Chloe', species: 'pig', emoji: '🐖' },
    { name: 'Daisy', species: 'dog', emoji: '🐕' },
    { name: 'Luna', species: 'cat', emoji: '🐈' }
];

const animalList = document.querySelector('.animal-list');

const animalListItems = animals.forEach(
    (animal) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${animal.emoji} ${animal.name} the ${animal.species}`;
        animalList.append(listItem);
    }
);