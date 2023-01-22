let formulario= document.querySelector("#form1");

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    let errores=0;

 
    let nombre1=document.getElementById("nombre1");
    let nombre=document.getElementById("nombre");
    nombre1.style.color="black";
    if (nombre.value==""){
        nombre1.innerText="El campo de nombre tiene que estar completo"
        errores=1;
    } else if(nombre.value.length <5){
        nombre1.innerText="El campo de nombre debe tener almenos cinco carácteres"
        errores=1;
    }

    let descripcion1=document.getElementById("descripcion1");
    let descripcion=document.getElementById("descripcion");
    descripcion1.style.color="black";
    if (descripcion.value.length<20){
        descripcion1.innerText="El campo de descripción debe tener almenos veinte carácteres"
        errores=1;
    }

    if (errores==0){
        formulario.submit()
    }



    

    
})


