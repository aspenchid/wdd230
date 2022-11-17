const LAT = "45.6796"
const LON = "-111.0386"
const APIKEY = "bc939b822600673b6ecf722eecb35b28"
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // document.querySelector('#temperature').textContent = jsObject.main.temp;
});









// const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5641727&appid={bc939b822600673b6ecf722eecb35b28}';
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//   });
// document.querySelector('#temperature').textContent = jsObject.main.temp;

// [45.6796, -111.0386]

//   "id": 5641727,
//   "name": "Bozeman",
//   "state": "MT",
//   "country": "US",
//   "coord": {
//       "lon": -111.038559,
//       "lat": 45.679649