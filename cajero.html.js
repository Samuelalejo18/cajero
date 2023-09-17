const salir1=document.getElementById("salir1");
const modal2=document.getElementById("modal2");
const Cancel=document.getElementById("Cancel");
const background=document.getElementById("mondal_container")
const modal3=document.getElementById("modal3");
const ingresar=document.getElementById('ingresar');
const Cancel2=document.getElementById("cancel2");
const modal4=document.getElementById("modal4");
const retiro=document.getElementById('retiro');
const password1=document.getElementById("username2");
const cancel3=document.getElementById('cancel3');
let togglePassword=document.getElementById('toggle');

const password2=document.getElementById("username4");

salir1.addEventListener('click',()=>{
    modal2.classList.add('show');
    background.style.display="flex";
background.style.justifyContent="center";
    background.style.alignItems="center";

} )


ingresar.addEventListener("click", ()=>{
    modal3.classList.add('show');

    background.style.display="flex";

    background.style.justifyContent="center";
    background.style.alignItems="center";

})
retiro.addEventListener('click',()=>{
    modal4.classList.add('show');
    background.style.display="flex";
    background.style.justifyContent="center";
    background.style.alignItems="center";

} )
Cancel.addEventListener('click',()=>{
    modal2.classList.remove('show');
    background.style.display="none";

} )

Cancel2.addEventListener('click',()=>{
    modal3.classList.remove('show');
    background.style.display="none";

} )

cancel3.addEventListener('click',()=>{
    modal4.classList.remove('show');
    background.style.display="none";

} )

function showHide(){
    if(password1.type==='password'){
        password1.setAttribute('type','text');
        togglePassword.classList.add('hide');
    } else{
        password1.setAttribute('type','password');
        togglePassword.classList.remove('hide')
    }
}

function showHide2(){
    if(password2.type==='password'){
        password2.setAttribute('type','text');
        togglePassword.classList.add('hide');
    } else{
        password2.setAttribute('type','password');
        togglePassword.classList.remove('hide')
    }
}




