// nav bar
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// weather
const LAT = "40.016"
const LON = "-81.073"
const APIKEY = "bc939b822600673b6ecf722eecb35b28"
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function showWeather(obj){
  let currenttemp = document.querySelector('#temperature');
  let weathericon = document.querySelector('#weathericon');
  let figurecaption = document.querySelector('figcaption');
  let windspeedobj = document.querySelector("#windspeed");
  let windchillobj = document.querySelector("#windchill");
  let humidity = document.querySelector("#humidity");
  const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  let windchillmsg = "N/A";
  let temp = obj.main.temp;
  let windspeed = obj.wind.speed;

  if (temp <= 50 && windspeed > 3){
      let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
      windchillmsg = `${chill}&deg; F`
  }

  currenttemp.textContent = Math.round(temp);
  windchillobj.innerHTML = windchillmsg;
  windspeedobj.textContent = Math.round(windspeed);
  figurecaption.textContent = obj.weather[0].main;
  weathericon.setAttribute('src', iconURL);
  weathericon.setAttribute('alt', obj.weather[0].description);
  humidity.textContent = obj.main.humidity;
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
});

// footer
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdated").textContent = document.lastModified; 