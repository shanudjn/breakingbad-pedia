const searchButton = document.querySelector('.div-search__button');
const inputElement = document.querySelector('.div-search__input');





function getSearchString() {
    console.log(inputElement.value);
}


searchButton.addEventListener('click', getSearchString);

(function () {
    console.log("Firt thing that happens");


})();