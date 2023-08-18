"use strict"
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPassword = document.querySelector("#userPassword");
let btnSubmit = document.querySelector("#btnSubmit");
let errorInput = document.querySelector("#errorInput");
let accounts = [];

if (localStorage.getItem("accounts") !== null) {
    accounts = JSON.parse(localStorage.getItem("accounts"));
};

btnSubmit.addEventListener("click", validationOnSubmit);
function validationOnSubmit() {
    if (validationUserName() === true && validationUserEmail() === true && validationUserPassword() === true) {
        let account = {
            name: userName.value,
            email: userEmail.value,
            pass: userPassword.value
        }
        accounts.push(account);
        setAccountsInLocalStorage(accounts);
        clearValues();
    }
    else {
        errorInput.classList.replace("d-none", "d-block");
    }
}

function setAccountsInLocalStorage(accounts) {
    window.localStorage.setItem("accounts", JSON.stringify(accounts));
}

function clearValues() {
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
}

// ************** V A L I D A T I O N **************
userName.addEventListener("blur", validationUserName);
function validationUserName() {
    var regex = /^\w{3,}$/;
    if (regex.test(userName.value) === true) {
        return true;
    } else {
        return false;
    }
}

userEmail.addEventListener("input", validationUserEmail)
function validationUserEmail() {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,8}$/;
    if (regex.test(userEmail.value) === true) {
        return true;
    } else {
        return false;
    }
}

userPassword.addEventListener("input", validationUserPassword);
function validationUserPassword() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(userPassword.value) === true) {
        return true;
    } else {
        return false;
    }
}




