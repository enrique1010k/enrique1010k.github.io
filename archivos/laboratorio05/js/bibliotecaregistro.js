// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarRegistro(){
    // declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // agregamos las columnas que se registren
    for(var i=0; i<listaregistro.length;i++){
        // declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonombre=fila.insertCell(0);
        var tituloapellido=fila.insertCell(1);
        var titulocorreo=fila.insertCell(2);
        // agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloapellido.innerHTML=listaregistro[i].apellido;
        titulocorreo.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}
// creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    // capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    // llamamos al procedimiento registrar
    if (txtNom.value != "" && txtApe.value != "" && txtCor.value != ""){
        Registrar(nom,ape,cor);
        MostrarRegistro();}
}

function Validar(){
    if (txtNom.value == ""){
        alert("Debe ingresar sus nombres para continuar");
        txtNom.focus();
    } else if (txtApe.value == ""){
        alert("Debe ingresar sus apellidos para continuar");
        txtApe.focus();
    } else if (txtCor.value == ""){
        alert("Debe ingresar su correo para continuar");
        txtCor.focus();
    }
}


// // agregamos un evento al boton
// btnRegistrar.addEventListener("click",function(){
//     alert("Hola");
// })

// // creamos un procedimiento para el mensaje
// function Mensaje(){
//     alert("Hola");
// }
// // agregamos el evento al boton
// btnRegistrar.addEventListener("click",Mensaje);

// asignemos la funcion registrar datos al boton
btnRegistrar.addEventListener("click",RegistrarDatos);
