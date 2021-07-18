// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var cboCategoria=document.getElementById("cboCategoria");
var txtCan=document.getElementById("txtCan");
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
        var tituloprecio=fila.insertCell(1);
        var titulocategoria=fila.insertCell(2);
        var titulocantidad=fila.insertCell(3);
        // agregamos los valores
        titulonombre.innerHTML=listaregistro[i].nombre;
        tituloprecio.innerHTML=listaregistro[i].precio;
        titulocategoria.innerHTML=listaregistro[i].categoria
        titulocantidad.innerHTML=listaregistro[i].cantidad;
        tbody.appendChild(fila);
    }
}
// creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    // capturando valores
    var nom=txtNom.value;
    // con el simbolo del dolar
    var pre="$ "+txtPre.value;
    var cat=cboCategoria.selectedIndex;
    var can=txtCan.value;
    // reemplazar el numero de orden del 0 al 3 por texto
    switch(cat){
        case 1:
            cat = "entretenimiento"
            break;
        case 2:
            cat = "tecnologia"
            break;
        case 3:
            cat = "linea blanca"
            break;
        default:
            cat = "error"
            break;
    }
    // Cuando los valores ingresados sean diferentes de "" o no se haya elegido una categoria...
    if (txtNom.value != "" && txtPre.value != "" && cboCategoria.selectedIndex != 0 && txtCan.value != ""){
        // llamamos al procedimiento registrar
        Registrar(nom,pre,cat,can);
        MostrarRegistro();
    }
}

function Validar(){
    if (txtNom.value == ""){
        alert("Ingrese el nombre del producto");
        txtNom.focus();
    } else if (txtPre.value == ""){
        alert("Ingrese el precio del producto");
        txtPre.focus();
    } else if (cboCategoria.selectedIndex == 0){
        alert("Seleccione una categoria");
        txtCor.focus();
    } else if (txtCan.value == ""){
        alert("Ingrese la cantidad del producto");
        txtCan.focus()
    }
}



// asignemos la funcion registrar datos al boton
btnRegistrar.addEventListener("click",RegistrarDatos);
