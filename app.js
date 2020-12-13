const searchButton = document.querySelector('.div-search__button');
const inputElement = document.querySelector('.div-search__input');
const characterListDiv = document.querySelector('#character-list');
const randomCharacterDiv = document.querySelector('#random-character-list');

const url = "https://breakingbadapi.com/api/characters";
const randomUrl = "https://breakingbadapi.com/api/character/random"






function displayData(data) {

    for (let i = 0; i < 10; i++) {
        console.log(data[i].name);

        var character = document.createElement("div");
        character.className = 'character-list__single';
        console.log(character)

        var single = characterListDiv.appendChild(character);
        single.innerHTML += `<img src=` + data[i].img + `>`
        single.innerHTML += `<div><p>` + data[i].name; + `</p>.`
        single.innerHTML += `<small> <i>` + data[i].nickname + `</i></small></div>`

    }
}
function createRandomElement(randomData, name) {
    console.log(randomData[0].name);

    var randomCharacter = document.createElement('p');
    randomCharacter.innerText = name + ` you are ` + randomData[0].name;
    console.log(randomCharacter)

    var randomCharacterImage = document.createElement('img');
    randomCharacterImage.src = randomData[0].img;

    randomCharacterDiv.appendChild(randomCharacterImage);
    randomCharacterDiv.appendChild(randomCharacter);

}

function getName() {
    var name = (inputElement.value);
    console.log(name);

    var randomCharacterResponse = fetch(randomUrl)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            createRandomElement(json, name);
        })
    console.log(name);



}


searchButton.addEventListener('click', getName);

(function () {
    console.log("First thing that happens");
    var response = fetch(url)
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            displayData(json);
        })
})();