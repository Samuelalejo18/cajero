const salir1=document.getElementById("salir1");
const modal2=document.getElementById("modal2");
const Cancel=document.getElementById("Cancel");
const background=document.getElementById("mondal_container");
const modal3=document.getElementById("modal3");
const modal3_1=document.getElementById("modal3_1");
modal3_1.style.display='none';
const ingresar=document.getElementById('ingresar');
const Cancel2=document.getElementById("cancel2");
const modal4=document.getElementById("modal4");
const retiro=document.getElementById('retiro');
const money1=document.getElementById('username1');
const password1=document.getElementById("username2");
const cancel3=document.getElementById('cancel3');
let togglePassword=document.getElementById('toggle');
const Withdrawals=document.getElementById('username3')
const password2=document.getElementById("username4");
const contra='Lukas2012Jake';
let Available_balance=200000;

const balance=document.getElementById("Balance");

const transaction=document.getElementById('transaction');
const Withdrawals2=document.getElementById('transaction2');

transaction.addEventListener('click',()=>{
   const response=password1.value;
    const response2= money1.value;
    if( contra===response  ){
        if(response2 >=10000000){
            const incorrectTransaction= document.createElement('p');
            const incorrectTransaction2=document.createTextNode('  The transaction exceeds the allowed amount ');


            modal3.appendChild(incorrectTransaction);
            modal3.appendChild(incorrectTransaction2);
            setTimeout(() =>{
                location.reload();
            },2000);
        }else if(response2 <=1000){
            const incorrectTransaction3= document.createElement('p');
            const incorrectTransaction4=document.createTextNode(' The transaction is less than the allowed amount');


            modal3.appendChild(incorrectTransaction3);
            modal3.appendChild(incorrectTransaction4);
            setTimeout(() =>{
                location.reload();
            },2000);

        } else{
            const valorEntero = parseInt(money1.value);
            balance.innerHTML =  Available_balance+valorEntero;

            modal3_1.style.display='block';
            modal3.style.display='none';
           setTimeout(() =>{
                background.style.display='none';
               modal3_1.style.display='none';
               modal3.style.display='block';
            },4000);

        }

    }else if( contra!==response ){
        console.log('Password incorrecta');
        const PassWordIncorrect= document.createElement('p');
        const PassWordIncorrect2=document.createTextNode(' ❌ Incorrect password  ');


        modal3.appendChild(PassWordIncorrect);
        modal3.appendChild(PassWordIncorrect2);
        setTimeout(() =>{
            location.reload();
        },2000);
    }
})

Withdrawals2.addEventListener('click',()=>{
    modal3.style.display='none';
    const response3=password2.value;
    const response4= Withdrawals.value;
    if( contra===response3  ){
        if(response4 >=10000000){
            const incorrectWithdrawals= document.createElement('p');
            const incorrectWithdrawals2=document.createTextNode('You cannot withdraw money beyond the allowed amount ');


            modal4.appendChild(incorrectWithdrawals);
            modal4.appendChild(incorrectWithdrawals2);
            setTimeout(() =>{
                location.reload();
            },2000);
        }else if(response4 <=1000){
            const incorrectWithdrawals3= document.createElement('p');
            const incorrectWithdrawals4=document.createTextNode(' You cannot withdraw money less than the allowed amount');


            modal4.appendChild(incorrectWithdrawals3);
            modal4.appendChild(incorrectWithdrawals4);
            setTimeout(() =>{
                location.reload();
            },2000);

        } else{
            const valorEntero2 = parseInt(Withdrawals.value);
            balance.innerHTML =  Available_balance-valorEntero2;
        }

    }else if( contra!==response3 ){
        console.log('Password incorrecta');
        const PassWordIncorrect3= document.createElement('p');
        const PassWordIncorrect4=document.createTextNode(' ❌ Incorrect password  ');


        modal4.appendChild(PassWordIncorrect3);
        modal4.appendChild(PassWordIncorrect4);
        setTimeout(() =>{
            location.reload();
        },2000);
    }
})

















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


function mostrarFechaHora() {
    const fechaYHoraActual = new Date();
    const fecha = fechaYHoraActual.toLocaleDateString();
    const hora = fechaYHoraActual.toLocaleTimeString();
    const elementoFechaHora = document.getElementById("Date");
    elementoFechaHora.innerHTML =  "Current date: " + fecha + "<br>Current time: " + hora;
}

window.onload = mostrarFechaHora;

const elementoValue = document.getElementById("Value");
money1.addEventListener("input", function() {

    elementoValue.textContent = money1.value;

});



