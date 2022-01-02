const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const logForm = document.querySelector("#login-form");
const regForm = document.querySelector("#register-form");
const siteBluring = document.querySelector("#siteBlur");









const registerBtn = document.querySelector('#register-link').addEventListener('click', () => {
    regForm.classList.toggle("active");
    logForm.classList.remove("activeLogin");
    siteBluring.classList.toggle('active');


})
const loginBtn = document.querySelector("#login-link").addEventListener('click', () => {
    logForm.classList.toggle("activeLogin");
    regForm.classList.remove("active");
    siteBluring.classList.toggle('active');

})

const pizzaBtn = document.querySelector('.add-pizza').addEventListener('click', () => {
    console.log(this);
})


hamburger.addEventListener("click", showMenu);

function showMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/*
let btnOrder = document.querySelector('#btn-order-pizza')



function clickMe() {
    btnOrder.style.width = '100px'
    window.requestAnimationFrame(clickMe)
}

window.requestAnimationFrame(clickMe)
*/
