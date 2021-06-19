Algoritmo Ejemplo3
	//definiendo variables
	Definir bas, alt, area Como Real;
	Definir men Como Texto;
	//inicializando variables
	bas = 0; alt = 0; area = 0; men = "";
	//capturando valores
	Escribir "Ingrese la base del rectangulo:";
	Leer bas;
	Escribir "Ingrese la altura del rectangulo:";
	Leer alt;
	//realizando operaciones
	area = bas * alt;
	//condicion
	Si (area > 100) Entonces
		men = "Es un rectangulo grande";
	SiNo
		men = "Es un rectangulo pequeño";
	FinSi
	//mostrando resultados
	Escribir "El area del rectangulo es: ",area;
	Escribir (men);
FinAlgoritmo
