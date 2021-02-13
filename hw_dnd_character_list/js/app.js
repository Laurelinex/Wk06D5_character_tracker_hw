document.addEventListener('DOMContentLoaded', () => {
    const newCharacterForm = document.querySelector('#new-character-form');
    newCharacterForm.addEventListener('submit', handleNewCharacterFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewCharacterFormSubmit = function (event) {
    event.preventDefault();

    // Simple MVP version:

    // const characterListItem = document.createElement('li');
    // characterListItem.textContent = `${this.name.value} the ${this.kin.value}: a ${this.alignment.value} ${this.class.value}`;
    // const characterList = document.querySelector('#character-list');
    // characterList.appendChild(characterListItem);

    const characterListItem = createCharacterListItem(event.target);
    const characterList = document.querySelector('#character-list');
    characterList.appendChild(characterListItem);

    this.reset();
};

const createCharacterListItem = function (form) {
    const characterListItem = document.createElement('li');
    characterListItem.classList.add('character-list-item');

    const nameKin = document.createElement('h4');
    nameKin.textContent = `${form.name.value} the ${form.kin.value}`;
    characterListItem.appendChild(nameKin);

    // const kin = document.createElement('h5');
    // kin.textContent = form.kin.value;
    // characterListItem.appendChild(kin);

    const classAlignment = document.createElement('p');
    classAlignment.textContent = `a ${form.alignment.value} ${form.class.value}`;
    characterListItem.appendChild(classAlignment);

    // const alignment = document.createElement('p');
    // alignment.textContent = form.alignment.value;
    // characterListItem.appendChild(alignment);

    const portrait = document.createElement('img')
    portrait.src = form.portrait.value
    characterListItem.appendChild(portrait);

    return characterListItem;
}

const handleDeleteAllClick = function() {
    const characterList = document.querySelector('#character-list');
    characterList.innerHTML = '';
}
