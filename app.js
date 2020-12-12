const searchButton = document.querySelector('.div-search__button');
const inputElement = document.querySelector('.div-search__input');
const characterListDiv = document.querySelector('#character-list');

const url = "https://breakingbadapi.com/api/characters";






function displayData(data) {
    console.log(data[0].name);
    characterListDiv.innerText = (data[0].name);
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