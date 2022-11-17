const LAT = "45.6796"
const LON = "-111.0386"
const APIKEY = "bc939b822600673b6ecf722eecb35b28"
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
function showWeather(obj){
  let currenttemp = document.querySelector('#temperature');
  let iconpath = document.querySelector('#icon-src');
  let weathericon = document.querySelector('#weathericon');
  let figurecaption = document.querySelector('figcaption');
  const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  currenttemp.textContent = obj.main.temp;
  iconpath.textContent = iconURL
  weathericon.setAttribute('src', iconURL);
  weathericon.setAttribute('alt', obj.weather[0].description);
  figurecaption.textContent = obj.weather[0].main
}
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
});