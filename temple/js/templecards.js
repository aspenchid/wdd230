// nav bar
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// toggle between list and card view
let cardselector = document.querySelector('#cardselect');
let listselector = document.querySelector('#listselect');
let cardview = document.querySelector('#cardview');
let listview = document.querySelector('#listview');

cardselector.addEventListener('click',()=>{
    cardview.style.display = 'block';
    listview.style.display = 'none';
    cardselector.style.opacity = 1.0;
    listselector.style.opacity = 0.5;
});
listselector.addEventListener('click', ()=>{
    cardview.style.display = 'none';
    listview.style.display = 'block';
    cardselector.style.opacity = 0.5;
    listselector.style.opacity = 1.0;
});

const requestURL= './data/templecards.json'

// First check to see if we need to initialize local storage with an empty array
const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string==null){
    likes_string="[]";
    localStorage.setItem(LIKES_KEY, likes_string);
}

// show cards
function displayCard(card){
    let cardview = document.querySelector('#cardview');
    let cardelt = document.createElement("div");
    cardelt.innerHTML=
    `<img src= "${card.imageURL}" alt="${card.name}">
    <h3>${card.name}</h3>
    <p>${card.street} ${card.citystatezip}</p>
    <p>${card.phone}</p>
    <p>${card.dedication}</p>
    <input class="mycheck" id="check-${card.id}" type="checkbox" onclick="likeTemple(this);"> 
    <label for="likethistemple">Like This Temple!</label>`
    cardview.appendChild(cardelt)
}
// show list
function displayList(temp){
    let card = document.createElement('tr');
    card.innerHTML = 
    `<h3>${temp.name}</h3>
    <td>${temp.street}<br>${temp.citystatezip}</td>
    <td>${temp.phone}</td>
    <td>${temp.dedication}</td>`
    document.querySelector("#listview table").appendChild(card)
}

// displays the card from the json
fetch(requestURL)
.then(function (response) {
    return response.json();
})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let temple = jsonObject['temples']
    temple.forEach(displayCard);
    temple.forEach(displayList);
}).then(()=>{
    // Turn the string value from local storage into a Java array
    let likeslist = JSON.parse(likes_string);
    likeslist.forEach(displayLike);
});

// like button function
function likeTemple(item){
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.id)){
            likeslist.push(item.id);
        }
    }
    else{
        if (likeslist.includes(item.id)){
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// Upon page reload, the list of individual items (by id) is checked.
function displayLike(item){
    console.log(item);
    let obj = document.getElementById(item);
    obj.checked = true;
}

// footer
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdated").textContent = document.lastModified; 