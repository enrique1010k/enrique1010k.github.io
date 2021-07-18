var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtDni = document.getElementById("txtDni");
var cboCurso = document.getElementById("cboCurso");
var rbM = document.getElementById("rbM");
var rbT = document.getElementById("rbT");
var rbN = document.getElementById("rbN");
var chkEst = document.getElementById("chkEst");

function MostrarRegistro(){
    var listaregistro = Mostrar();
    tbody = document.querySelector("#tbAlumno tbody");
    tbody.innerHTML = "";
    for(var i = 0; i < listaregistro.length; i++){
        var fila = tbody.insertRow(i);
        var titulonombre = fila.insertCell(0)
        var tituloapellido = fila.insertCell(1);
        var titulodni = fila.insertCell(2);
        var titulocurso = fila.insertCell(3);
        var tituloturno = fila.insertCell(4);
        var tituloestado=fila.insertCell(5);
        titulonombre.innerHTML = listaregistro[i].nombres;
        tituloapellido.innerHTML = listaregistro[i].apellidos;
        titulodni.innerHTML = listaregistro[i].dni
        titulocurso.innerHTML = listaregistro[i].curso
        tituloturno.innerHTML = listaregistro[i].turno
        tituloestado.innerHTML = listaregistro[i].estado
        tbody.appendChild(fila);
    }
}

function RegistrarDatos(){
    var nom = txtNom.value;
    var ape = txtApe.value;
    var dni = txtDni.value;
    var cat = cboCurso.selectedIndex;
    // "var turn" y "var est" aparece en las lineas de codigo 56, 59, 62, 66 y 68.
    // CATEGORIA
    switch(cat){
        case 1:
            cat = "Diseño Web";
            break;
        case 2:
            cat = "Base de Datos";
            break;
        case 3:
            cat = "Programación Java";
            break;
        default:
            cat = "Ninguno";
            break;
    }
    // TURNO
    if (rbM.checked){
        var turn = "Mañana"
    }
    if (rbT.checked){
        var turn = "Tarde"
    }
    if (rbN.checked){
        var turn = "Noche"
    }
    // ESTADO
    if (chkEst.checked){
        var est = "Habilitado"
    } else {
        var est = "Inhabilitado"
    }
    Validar();
    // SOLO CUANDO NO HAYA ESPACIOS VACIOS
    if (txtNom.value!="" && txtApe.value!="" && txtDni.value!=""){
        Registrar(nom,ape,dni,cat,turn,est);
        MostrarRegistro();
    }
}
// ERROR
function MostrarError(m){
    error.style.display = "block";
    error.innerHTML += "<h2>"+m+"</h2>"
}
// VALIDAR DATOS
function Validar(){
    error.innerHTML="";
    if(txtNom.value==""){
        MostrarError("Por favor ingrese sus nombres");
        txtNom.focus();
    } else if (txtApe.value==""){
        MostrarError("Por favor ingrese sus apellidos");
        txtApe.focus();
    } else if (txtDni.value==""){
        MostrarError("Por favor ingrese su DNI")
        txtDni.focus();
    } else {
        error.style.display="none";
    }
}
btnRegistrar.addEventListener("click",RegistrarDatos);