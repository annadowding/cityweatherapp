function heybaby(event) {
  event.preventDefault();
  //selecting the enter a city... part of the form.
  let userSearch = document.querySelector("#user-search");
  //selecting the city h1 which I gave an id "city"
  let city = document.querySelector("#city");
  //make the h1 HTML match the Enter a city...entered by a user
  city.innerHTML = userSearch.value;
}

//selecting the whole form and adding a submit event listener
let form = document.querySelector("#form");
form.addEventListener("submit", heybaby);
