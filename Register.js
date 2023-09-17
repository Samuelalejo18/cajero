const boton = document.getElementById("Next");

const input=document.getElementById("container3.1");
const newDiv= document.getElementById("Register");
const cancel=document.getElementById("Cancel");
const Next=document.getElementById("Next");
const Recover=document.getElementById("Recover");


const Home=document.getElementById("Home");
boton.addEventListener('click', function () {
Next.style.display="none";
   cancel.style.display="none";
input.style.display="none";
    newDiv.style.display="block";
    Recover.style.display="none";
    Home.style.display="block";


});