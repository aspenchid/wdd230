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



// this is how you test if this is working it will be how many days 
// window.localStorage.setItem("last-visit", new Date("12/03/2003"))
const visit = document.querySelector("#visit-message");

let visitMessage = "This is your first visit to this page.";

let todayDate = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null){
    let lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((todayDate.getTime() - lastVisitDate.getTime()) / (24 * 60 * 1000));
    visitMessage = `You last visited the page ${dateDifference} days ago`
}

visit.textContent = visitMessage
window.localStorage.setItem("last-visit", todayDate.toString());


//lazy loader 
let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () =>{
        image.removeAttribute("data-src");
    };
};

// use if you are putting loading = "lazy" in HTML on images after alt
// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });

//use for an intersection observer
if("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) =>{
        items.forEach((item) =>{
            if(item.isIntersecting){
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}
else{
    imagesToLoad.forEach((img) =>{
        loadImages(img);
    });
}

document.getElementById("lastupdated").textContent = document.lastModified;