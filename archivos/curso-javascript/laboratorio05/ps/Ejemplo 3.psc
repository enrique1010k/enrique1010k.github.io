Algoritmo Ejemplo3
	//definiendo e inicializando variables
	definir sb, bon, des, sf como real;
	definir cat como texto;
	//inicializando variables
	sb = 0; bon = 0; des = 0; sf = 0; cat = "";
	//capturando valores
	escribir "Ingrese el sueldo básico:";
	leer sb;
	escribir "Ingrese una categoria A o B o C o D:";
	leer cat;
	//condicion
	si (cat = "a") Entonces
		bon = sb * 0.03;
		des = sb * 0.01;
	SiNo
		si (cat = "b") Entonces
			bon = sb * 0.05;
			des = sb * 0.02;
		SiNo
			Si (cat = "c") Entonces
				bon = sb * 0.07;
				des = sb * 0.03;
			SiNo
				Si (cat = "d") Entonces
					bon = sb * 0.09;
					des = sb * 0.04;
				SiNo
					bon = 0;
					des = 0;
				FinSi
			FinSi
		FinSi
	FinSi
	//realizando operaciones
	sf = sb + bon - des;
	//mostrando resultados
	escribir "El sueldo basico es: ",sb;
	escribir "La bonificacion es: ",bon;
	escribir "El descuento es: ",des;
	Escribir "El sueldo final es ",sf;
FinAlgoritmo