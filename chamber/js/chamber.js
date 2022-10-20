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

function setwindchill(temp, windspeed){
    let tempobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");

    let windchillmsg = "N/A";

    if (temp <= 50 && windspeed > 3){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}&deg; F`
    }

    tempobj.textContent = temp;
    windspeedobj.textContent = windspeed;
    windchillobj.innerHTML = windchillmsg;
}
setwindchill(49, 10)


document.getElementById("lastupdated").textContent = document.lastModified;