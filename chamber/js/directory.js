let cardselector = document.querySelector('#cardselect');
let listselector = document.querySelector('#listselect');
let cardview = document.querySelector('#cardview');
let listview = document.querySelector('#listview');

cardselector.addEventListener('click',()=>{
    cardview.style.display = 'flex';
    listview.style.display = 'none';
    cardselector.style.opacity = 1.0;
    listselector.style.opacity = 0.5;
});
listselector.addEventListener('click', ()=>{
    cardview.style.display = 'none';
    listview.style.display = 'flex';
    cardselector.style.opacity = 0.5;
    listselector.style.opacity = 1.0;
});

const requestURL= './data/data.json'

function displayCard(card){
    let cardview = document.querySelector('#cardview');
    let cardelt = document.createElement("div");
    cardelt.innerHTML=
    `<img src= "${card.imageURL}" alt="${card.name}">
    <h3>${card.name}</h3>
    <p>${card.street} ${card.citystatezip}</p>
    <p>${card.phone}</p>
    <p><a href="${card.websiteURL}">${card.websiteURL}</a></p>`
    cardview.appendChild(cardelt)
}

function displayList(biz){
    let card = document.createElement('tr');
    card.innerHTML = 
    `<h3>${biz.name}</h3>
    <td>${biz.street}<br>${biz.citystatezip}</td>
    <td>${biz.phone}</td>
    <td><a href="${biz.websiteURL}">${biz.websiteURL}</a></td>`

    document.querySelector("#listview table").appendChild(card)
}

fetch(requestURL)
.then(function (response) {
    return response.json();
})
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    let bizlist = jsonObject['businesses']
    bizlist.forEach(displayCard);
    bizlist.forEach(displayList);
});


//REGULAR JS

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

document.getElementById("lastupdated").textContent = document.lastModified;