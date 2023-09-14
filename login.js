
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
    window.location.href = 'cajero ultimate.html';
}else if(user===response2 && contra!==response ) {
const PassWordIncorrect= document.createElement('p');
const PassWordIncorrect2=document.createTextNode(' ❌ Incorrect password  ');
    ElementFather.style.display= 'block';
    ElementFather.appendChild(PassWordIncorrect);
    ElementFather.appendChild(PassWordIncorrect2);

  setTimeout(() =>{
      location.reload();
  },2000);
} else if (response2.trim() === "" || response.trim() === "") {

    const UserdontE4 = document.createElement('p');
    const UserdontE3 = document.createTextNode(' ❌ Enter valid information');
    ElementFather.appendChild(UserdontE4);
    ElementFather.appendChild(UserdontE3);
    ElementFather.style.display = 'block';
    setTimeout(() => {
        location.reload();
    }, 2000);
} else if (user!==response2 && contra!==response) {

    const UserdontE = document.createElement('p');
    const UserdontE2 = document.createTextNode(' ❌ Username does not exist');
    ElementFather.appendChild(UserdontE);
    ElementFather.appendChild(UserdontE2);
    ElementFather.style.display = 'block';
    setTimeout(() => {
        location.reload();
    }, 2000);
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







