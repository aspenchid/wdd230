// this is how you test if this is working it will be how many days 
// window.localStorage.setItem("last-visit", new Date("12/03/2003"))
const visit = document.querySelector("#visit-message");

let visitMessage = "This is your first visit to this page.";

let todayDate = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null){
    let lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((todatDate.getTime() - lastVisitDate.getTime()) / (24 * 60 * 1000));
    visitMessage = `You last visited the page ${dateDifference} days ago`
}

visit.textContent = visitMessage
window.localStorage.setItem("last-visit", todayDate.toString())