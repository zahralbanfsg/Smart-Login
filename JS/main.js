"use strict"
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let btnLogin = document.querySelector("#btnLogin");
let errorInput = document.querySelector("#errorInput");
let accounts = [];
let currentIndex;

if (localStorage.getItem("accounts") !== null) {
    accounts = JSON.parse(localStorage.getItem("accounts"));
};

btnLogin.addEventListener("click", checkDataRepeated)
function checkDataRepeated() {
    let checkAccountValues = false;
    for (let i = 0; i < accounts.length; i++) {
        if (userEmail.value == accounts[i].email && userPassword.value == accounts[i].pass) {
            checkAccountValues = true;
            currentIndex = i;
            break
        }
    }
    if (checkAccountValues == true) {
        localStorage.setItem("index", currentIndex);
        localStorage.setItem("userName", accounts[currentIndex].name)
        open("welcome.html", "_self");
    } else {
        errorInput.classList.replace("d-none", "d-block");
    }
}