const boton = document.getElementById("Next");
const div = document.querySelector(".container3");
const text=document.getElementById("Text");
const input=document.getElementById("username1");
const span=document.getElementById("span");
const botonCancel=document.getElementById("Cancel");
const wolf1=document.getElementById("wolf1");

const Home=document.getElementById("Home");
boton.addEventListener('click', function () {
    const card = document.createElement('div');
    card.classList.add('.container4');
    card.style.fontSize="30px";
    card.style.textAlign="center";
    const Thanks = document.createElement('p');

    Thanks.textContent = "We have sent you an email to recover your account.";
boton.style.display="none";
text.style.display="none";
input.style.display="none";
span.style.display="none";
Home.style.display="block";
botonCancel.style.display="none";
    card.appendChild(Thanks);
    div.appendChild(card);
});