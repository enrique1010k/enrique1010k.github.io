// declaramos variables para los controles
var txtCor = document.getElementById("txtCor");
var txtCon = document.getElementById("txtCon");
var btnRegistrar = document.getElementById("btnRegistrar");
// creamos un procedimiento para limpiar
function Limpiar(){
    txtCor.value = "";
    txtCon.value = "";
    txtCor.focus();
}


// creamos un procedimiento para registrar
function Registrar(){
    if (txtCor.value == "" || txtCor.value == null){
        alert("Ingrese el correo");
        txtCor.focus();
    } else if (txtCon.value == "" || txtCon.value == null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    } else {
        // capturando valores
        var cor = txtCor.value;
        var con = txtCon.value;

        // Llamando al codigo de firebase para registrar
        firebase.auth().createUserWithEmailAndPassword(cor, con)
        .then((userCredential) => {
        alert("Se registro el usuario");
        Limpiar();
        })
        .catch((error) => {
            var errorCode = error.code;
            alert(errorCode);
            var errorMessage = error.message;
            alert(errorMessage);
        Limpiar();
        
        });
    }
}

//asignamos el procedimiento al boton
btnRegistrar.addEventListener("click",Registrar);
