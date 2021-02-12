document.addEventListener('DOMContentLoaded', () => {
    const newCharacterForm = document.querySelector('#new-character-form');
    newCharacterForm.addEventListener('submit', handleNewCharacterFormSubmit);
});

const handleNewCharacterFormSubmit = function (event) {
    event.preventDefault();

    const characterListItem = document.createElement('li');
    characterListItem.textContent = `${this.name.value} the ${this.kin.value}: a ${this.alignment.value} ${this.class.value}`;
    const characterList = document.querySelector('#character-list');
    characterList.appendChild(characterListItem);
};
