const Mali={
    Name:'Mali',
    User : "1014180480",
    password:'Lukas2004',
}
const Gera={
    Name:'Gera',
    User : 1018940180,
    password:'Layou2020',
}
const Maui={
    Name:'Maui',
    User : 1000796256,
    password:'Passwoord',
}
let password=document.getElementById('password');
let togglePassword=document.getElementById('toggle');
function showHide(){
    if(password.type==='password'){
        password.setAttribute('type','text');
        togglePassword.classList.add('hide');
    } else{
        password.setAttribute('type','password');
        togglePassword.classList.remove('hide')
    }
}
//const ingresar=document.querySelector('#ingresar');

//const User= "1014180480";
  // const password='Lukas2004';

//ingresar.addEventListener('click', function(){
  //  const input1= document.querySelector('#username1');
    //const input2= document.querySelector('#password');
   //const response1= input1.value;
   //const response2=input2.value;


  //  if(User&&password===response1&&response2){
    //input1.textContent="usuario valido";
    //input2.textContent="Password valida";
   //} else{
    //input1.textContent="Usuario invalido, intente nuevamente";
    //input2.textContent="Password invalido, intente nuevamente";
  //}
//})


