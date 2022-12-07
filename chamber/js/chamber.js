// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;


function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();

// make this actually == 1, 2
if (today.getDay() == 1){
    document.querySelector("header p").style.display="block";
}
if (today.getDay() == 2){
    document.querySelector("header p").style.display="block";
}


const LAT = "45.6796"
const LON = "-111.0386"
const APIKEY = "bc939b822600673b6ecf722eecb35b28"
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;


function showWeather(obj){
  let currenttemp = document.querySelector('#temperature');
//   let iconpath = document.querySelector('#icon-src');
  let weathericon = document.querySelector('#weathericon');
  let figurecaption = document.querySelector('figcaption');
  let windspeedobj = document.querySelector("#windspeed");
  let windchillobj = document.querySelector("#windchill");
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
//   iconpath.textContent = iconURL
  figurecaption.textContent = obj.weather[0].main;
  weathericon.setAttribute('src', iconURL);
  weathericon.setAttribute('alt', obj.weather[0].description);
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
});

document.getElementById("lastupdated").textContent = document.lastModified;