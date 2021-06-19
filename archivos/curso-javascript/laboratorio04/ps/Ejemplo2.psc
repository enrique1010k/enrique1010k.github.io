Algoritmo Ejemplo2
	//definiendo variables
	Definir n1, n2, n3, n4, prom Como Real;
	Definir men Como Texto;
	//inicializando variables
	n1 = 0; n2 = 0; n3 = 0; n4 = 0; prom = 0; men = "";
	//capturando valores
	Escribir "Ingresa la nota 1:";
	Leer n1;
	Escribir "Ingrese la nota 2:";
	Leer n2;
	Escribir "Ingrese la nota 3:";
	Leer n3;
	Escribir "Ingrese la nota 4:";
	Leer n4;
	//realizando operaciones
	prom = (n1 + (2 * n2) + n3 + (3 * n4)) / 7;
	//condicion
	Si (prom >= 13) Entonces
		men = "Aprobado";
	SiNo
		men = "Desaprobado";
	FinSi
	//mostrando resultados
	Escribir "El promedio es: ",prom;
	Escribir men;
FinAlgoritmo
