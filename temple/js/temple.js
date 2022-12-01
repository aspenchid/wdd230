function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;




// footer
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdated").textContent = document.lastModified;