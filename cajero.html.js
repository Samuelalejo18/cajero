const salir1=document.getElementById("salir1");
const modal2=document.getElementById("modal2");
const Cancel=document.getElementById("Cancel");
const background=document.getElementById("mondal_container")
const modal3=document.getElementById("modal3");
const ingresar=document.getElementById('ingresar');
const Cancel2=document.getElementById("cancel2");
const modal4=document.getElementById("modal4");
const retiro=document.getElementById('retiro');

const cancel3=document.getElementById('cancel3');

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