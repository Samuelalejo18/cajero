
let password=document.getElementById('password');
let togglePassword=document.getElementById('toggle');
let username1= document.getElementById('username1');
const ingresar= document.getElementById('ingresar');
const contra='Lukas2012Jake';
const user='1014140745'
const ElementFather=document.getElementById('incorrect');
ingresar.addEventListener('click', function (){
    const response=password.value;
    const response2= username1.value;

if(user===response2 && contra===response  ){
alert('Usuario y contraseña correctas ');




    }else if(user===response2 && contra!==response ) {
    alert('Contraseña incorrecta');

const PassWordIncorrect= document.createElement('p');
const PassWordIncorrect2=document.createTextNode('Contraseña incorrecta');
    ElementFather.appendChild(PassWordIncorrect);
    ElementFather.appendChild(PassWordIncorrect2);



}else if (user!==response2 && contra!==response){
    alert('el usuario no existe');

    }else if(null===response2 && null===response ){
    alert('ingresa un dato valido ')
}

})


function showHide(){
    if(password.type==='password'){
        password.setAttribute('type','text');
        togglePassword.classList.add('hide');
    } else{
        password.setAttribute('type','password');
        togglePassword.classList.remove('hide')
    }
}







