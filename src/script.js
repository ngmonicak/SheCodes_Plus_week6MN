//feature 1 display date and time
let now = new Date();
let time = document.querySelector("#day-time");
let currentDate = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let hours = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11"
];

let hour = hours[now.getHours()];
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let month = months[now.getMonth()];
let day = days[now.getDay()];
let year = now.getFullYear();
let date = now.getDate();

time.innerHTML = `${day} ${hour}:${minutes}`;
currentDate.innerHTML = `${date} ${month} ${year}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
//feature 2 display city input
function search(event) {
  event.preventDefault();
  let apiKey = "3614e0124702f80e1456847a1db190c6";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appId=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayWeatherCondition);

  let searchInput = document.querySelector("#search-input");
  let h2 = document.querySelector("h2");
  // console.log(searchInput);
  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  } else {
    h2.innerHTML = null;
    alert("Please type in a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//bonus feature
function convertToF(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToF);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToC);
