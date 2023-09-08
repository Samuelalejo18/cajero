const Mali={
    Name:'Mali',
    User : "1014180480",
    contra:'Lukas2004',
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


const ingresar=document.getElementById('#ingresar');


let response2 = password.value;
ingresar.addEventListener('click', function() {
    //let input1 = document.getElementById('username1');
    console.log(ingresar);

   // const response1 = input1.value;
    if ( Mali.contra === response2) {
       // input1.textContent = "usuario valido";
        console.log("Password valido ");
       // password.textContent = "Password valida";
    } else {

        console.log("Password invalido valido ");
       // input1.textContent = "Usuario invalido, intente nuevamente";
        //password.textContent = "Password invalido, intente nuevamente";
    }
})



