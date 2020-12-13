const searchButton = document.querySelector('.div-search__button');
const inputElement = document.querySelector('.div-search__input');
const characterListDiv = document.querySelector('#character-list');

const url = "https://breakingbadapi.com/api/characters";






function displayData(data) {
    // console.log(data[0].name);
    // characterListDiv.innerText = (data[0].name);
    for (let i = 0; i < 10; i++) {
        console.log(data[i].name);
        // characterListDiv.innerText = data[i].name;

        //create element with class
        var character = document.createElement("div");
        character.className = 'character-list__single';

        //console.log(characterListDiv.appendChild(character))

        //create a p tag
        // var nameParagraphTag = document.createElement('p');
        // nameParagraphTag.innerText = data[i].name;
        // console.log(nameParagraphTag)

        // character.appendChild(nameParagraphTag)
        console.log(character)

        var single = characterListDiv.appendChild(character);
        single.innerHTML += `<div><img src=` + data[i].img + `></div>`
        single.innerHTML += `<p>` + data[i].name; + `</p>.`
        single.innerHTML += `<small> <i>` + data[i].nickname + `</i></small>`

    }
}

function getSearchString() {
    console.log(inputElement.value);
    console.log(data);
}


searchButton.addEventListener('click', getSearchString);

(function () {
    console.log("First thing that happens");
    var response = fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            displayData(json);
        })
})();