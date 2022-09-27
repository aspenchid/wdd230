const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdated").textContent = document.lastModified;
//Better way to do this...
// window.addEventListener('load', () => {
//     const today = new Date();
//     document.getElementById('currrentyear').textContent = today.getFullYear();
// });
