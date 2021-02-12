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


    const name = document.createElement('h4');
    name.textContent = form.name.value;
    characterListItem.appendChild(name);

    const kin = document.createElement('h5');
    kin.textContent = form.kin.value;
    characterListItem.appendChild(kin);

    const clss = document.createElement('p');
    clss.textContent = form.class.value;
    characterListItem.appendChild(clss);

    const alignment = document.createElement('p');
    alignment.textContent = form.alignment.value;
    characterListItem.appendChild(alignment);

    const portrait = document.createElement('img')
    portrait.src = form.portrait.value
    characterListItem.appendChild(portrait);

    return characterListItem;
}

const handleDeleteAllClick = function() {
    const characterList = document.querySelector('#character-list');
    characterList.innerHTML = '';
}
