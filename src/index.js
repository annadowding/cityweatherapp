//Making a function that will handle the API response
//once axios has succeeded in getting it
function hereWeGo(response) {
  let bigTemperature = document.querySelector("#bigTemperature");
  bigTemperature.innerHTML = response.data.temperature.current;
  // console.log(response);
}

//7. function to tell JS to substitute the user's input as
//the cityName city part of the apiUrl that axois
// got for us.
function makeTheApiKeyMatchTheCity() {
  let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
  let userSearch = document.querySelector("#user-search");
  let cityName = userSearch.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
  axios.get(apiUrl).then(hereWeGo);
  // function writeTheNewCity (makeTheApiKeyMatchTheCity);
}

//5/6.I copy pasted axios CDN into index.html. Now access API:
let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={city}&key={key}";

function heybaby(event) {
  event.preventDefault();
  //2. selecting the enter a city... part of the form.
  let userSearch = document.querySelector("#user-search");
  //3. selecting the city h1 which I gave an id "city"
  let city = document.querySelector("#city");
  //4. make the h1 HTML match the Enter a city...entered by a user
  city.innerHTML = userSearch.value;
  makeTheApiKeyMatchTheCity(userSearch.value);
}

//1. selecting the whole form and adding a submit event listener
let form = document.querySelector("#form");
form.addEventListener("submit", heybaby);
