// DOM NODES
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");
const usersDiv = document.querySelector(".users");
const loginDiv = document.querySelector(".login");
const loginNav = document.getElementById("loginNav");
const usersNav = document.getElementById("usersNav");
const logoutNav = document.getElementById("logoutNav");

let token = localStorage.getItem("token") || "";

async function login(e) {
  e.preventDefault();
  try {
    const user = {
      userName: usernameInput.value,
      password: passwordInput.value,
    };
    const response = await fetch(`http://localhost:3000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    token = data.token;
    localStorage.token = token;
    logged();
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", login);



function hideViews() {
  loginDiv.classList.add("hide");
  loginNav.classList.add("hide");
  usersDiv.classList.add("hide");
  usersNav.classList.add("hide");
  logoutNav.classList.add("hide");
}

function showNavLogged() {
  usersNav.classList.remove("hide");
  logoutNav.classList.remove("hide");
}

function printUsers(data) {
  if (data.message) {
    return (usersDiv.innerText = data.message);
  }
  data.forEach((user) => {
    usersDiv.innerHTML +=
    `<div>
      <h5 class="card-title">${user.name}</h5>
      <p class="card-text">${user.mail}</p>
    </div>`;
  });
}

async function getUsers() {
  try {
    hideViews();
    showNavLogged();
    usersDiv.classList.remove("hide");
    const res = await fetch("http://localhost:3000/clients", {
      headers: { Authorization: token },
    });
    const data = await res.json();
    // console.log(data);
    await printUsers(data);
  } catch (error) {
    console.error(error);
  }
}

usersNav.addEventListener("click", getUsers);

function logout() {
  // localStorage.token = "";
  // delete localStorage.token;
  localStorage.clear();
  token = "";
  logoutNav.classList.add("hide");
  usersDiv.classList.add("hide");
  usersNav.classList.add("hide");
  loginNav.classList.remove("hide");
  usersDiv.innerHTML = "";
  loginDiv.classList.remove("hide");
}

logoutNav.addEventListener("click", logout);

function logged() {
  if (token.length > 0) {
    hideViews();
    showNavLogged();
    getUsers();
  }
}

logged();
