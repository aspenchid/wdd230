// nav bar
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// send date with form 
var currentdateobj = document.querySelector('#currentdate');
var joinloaddate = new Date();
currentdateobj.value = joinloaddate.toLocaleString();

// footer
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdated").textContent = document.lastModified;