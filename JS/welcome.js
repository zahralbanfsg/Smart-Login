let massage = document.getElementById("massage");
let index = Number(localStorage.getItem("index"));
let btnLogOut = document.getElementById("btnLogOut")
if (localStorage.getItem("accounts") !== null) {
    accounts = JSON.parse(localStorage.getItem("accounts"));
};

if (localStorage.getItem("userName")) {
    massage.innerHTML = `Welcome ${accounts[index].name}`;
} else {
    location.href = "../index.html";
}


btnLogOut.addEventListener("click", function () {
    localStorage.removeItem("userName");
    location.href = "../index.html";
})
