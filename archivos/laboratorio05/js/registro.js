// creamos un vector que contenga la información
var registro = [];
// creamos un procedimiento para registrar
function Registrar(nombreregistro,apellidoregistro,correoregistro){
    var NuevoRegistro={
        nombre:nombreregistro,
        apellido:apellidoregistro,
        correo:correoregistro
    };
    registro.push(NuevoRegistro);
}
// creamos una función para obtener los valores del registro
function Mostrar(){
    return registro;
}