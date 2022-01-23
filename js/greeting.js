const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const contents = document.querySelector("#content")

HIDDEN_CLASSNAME = 'hidden';
USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

function paintGreetings(username){
    greeting.innerText = `Meow! ${username}!`;
    contents.classList.remove(HIDDEN_CLASSNAME);
    contents.classList.add("fade-in-box")
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    contents.classList.add("hidden");
} else {
    paintGreetings(savedUserName)
}