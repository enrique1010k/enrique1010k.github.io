var alumno = []

function Registrar(nomalumno,apealumno,dnialumno,curalumno,turalumno,estalumno){
    var NuevoAlumno = {
        nombres:nomalumno,
        apellidos:apealumno,
        dni:dnialumno,
        curso:curalumno,
        turno:turalumno,
        estado:estalumno,
    };
    alumno.push(NuevoAlumno);
}
function Mostrar(){
    return alumno;
}