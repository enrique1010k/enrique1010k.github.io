// variables para los controles
var txtCod = document.getElementById("txtCod")
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtCor = document.getElementById("txtCor");
var btnRegistrar = document.getElementById("btnRegistrar");
var btnActualizar = document.getElementById("btnActualizar");
// llamamos a la funcion registrar de Firebase
// function writeUserData(nm, ap, cr) {
//     database.ref('registro/').set({
//         nombre: nm,
//         apellido: ap,
//         correo: cr
//     })
// writeUserData(nom,ape,cor)
// }
//crear un procedimiento para limpiar
function Buscar (codigo){
    //seleccionamos la tabla
    var db = database.ref().child("registro");
    db.once("value").then(function (snapshot){
        snapshot.forEach(function (data) {
            //declaramos una variable para el codigo de la tabla
            var key = data.key;
            //evaluamos que el key de la tabla sea igual al codigo buscado
            if (key == codigo){
                var cod = key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                //enviamos los datos a controles 
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        });
    });
}
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

// creamos un procedimiento para mostrar
function Mostrar(){
    //declaramos una variable para el numero de filas
    var i = 0;
    // selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //se selecciona la tabla
    var db = database.ref().child("registro");
    db.once("value").then(function(snapshot){
        if (snapshot.exists()){
            // Loop para recorrer los datos de Firebase
            snapshot.forEach(function(data){
                var cod = data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                //declaramos una variable para la fila
                var fila = tbody.insertRow(i);
                // declaramos variables para los titulos
                var titulonombre=fila.insertCell(0);
                var tituloapellido=fila.insertCell(1);
                var titulocorreo=fila.insertCell(2);
                var tituloact=fila.insertCell(3);
                var titulocor=fila.insertCell(4);
                // agregamos los valores
                titulonombre.innerHTML=nom;
                tituloapellido.innerHTML=ape;
                titulocorreo.innerHTML=cor;
                // tituloact.innerHTML="<a href = '#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                
                tituloact.innerHTML="<a href=# onclick=Buscar('" + cod + "')><img src=img/volveracargar.png width=20px height=26px style='margin-bottom: -3px'></a>"
                // titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";

                titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')><img src=img/quitar.png width=24px height=24px style='margin-bottom: -3px'></a>"
                tbody.appendChild(fila);
                i++       
            });
        }
    });
}
// // mostramos los valores en la tabla
//var listaregistro=Mostrar();

// llamamos a la funcion mostrar cuando cargue la pagina
window.onload=Mostrar;


// creamos un procedimiento para registrar
function Registrar(){
    if (txtNom.value=="" || txtNom.value==null){
        alert("Ingrese el nombre");
        txtNom.focus();
    } else if (txtApe.value=="" || txtApe.value==null){
        alert("Ingrese el apellido");
        txtApe.focus();
    } else if (txtCor.value=="" || txtCor.value==null){
        alert("Ingrese el correo");
        txtCor.focus();
    } else {
        //capturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;   
        //llamamos a la funcion del Firebase
        //seleccionamos la tabla
        //si la tabla no existe automaticacmente el firebase la crea
        var db = database.ref('registro');
        //asignamos los valores a la tabla que ha sido creada
        var registros = db.push();
        //los valores se deberan de pasar con la estructura de JSON
        registros.set({
            'nombre': nom,
            'apellido': ape,
            'correo': cor,
        });
        alert("Se registro los datos");
        Limpiar();
        Mostrar();
    }
}
// creamos el procedimiento para actualizar
function Actualizar(){
    //capturando valores
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var cor = txtCor.value;
    //seleccionamos la tabla que vamos actualizar con su codigo correspondiente
    var db = database.ref("registro/"+cod);
    //le pasamos los datos que vamos actualizar
    db.update({
        nombre: nom,
        apellido: ape,
        correo: cor,
    });
    alert("Se actualizo el dato");
    //llamamos al procedimiento limpiar
    Limpiar();
    //llamamos al procedimiento mostrar
    Mostrar();
}
//creamos un procedimiento para eliminar
function Eliminar(codigo) {
    var result = confirm("¿Esta seguro que quieres elminar el registro?");
    //evaluamos la respuesta
    if(result){
        //pasamos el codigo al registro que se va a elminar
        var cod = codigo;
        //seleccionamos la tabla con el codigo correspondiente para eliminarla
        var db = database.ref("registro/"+cod).remove();
        alert("Se elmino el dato");
        //llamamos a la funcion Limpiar
        Limpiar();
        //llamamos a la funcion mostrar
        Mostrar();
    }
}

// llamamos a la funcion registrar en el boton
btnRegistrar.addEventListener("click",Registrar);
btnActualizar.addEventListener("click", Actualizar);
