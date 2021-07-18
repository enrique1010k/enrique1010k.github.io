// creamos un vector para el producto
var producto = [];
// creamos un procedimiento para registrar
// categoria se va a registrar de un Combobox --> select
// categoria: Entretenimiento, Tecnologia, Linea Blanca.
function Registrar(nomproducto,preproducto,catproducto, canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}
// creamos una función para obtener los valores del registro
function Mostrar(){
    return producto;
}