Algoritmo Ejemplo2
	//definiendo varaibles
	definir tur, men como texto;
	//inicializando variables
	tur = ""; men = "";
	//capturando valores
	escribir "Ingrese el turno M o T o N:";
	leer tur;
	//condicion
	si (tur = "m") Entonces
		men = "Mañana";
	SiNo
		Si (tur = "t") Entonces
			men = "Tarde";
		SiNo
			Si (tur = "n") Entonces
				men = "Noche";
			SiNo
				men = "No es una letra valida";
			FinSi
		FinSi
	FinSi
	//mostrando resultados
	escribir "El turno es: ",men;
FinAlgoritmo
