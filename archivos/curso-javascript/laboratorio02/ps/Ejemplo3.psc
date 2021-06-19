Algoritmo Ejemplo3
	//definiendo variables
	Definir pre, sbt, igv, tot Como Real;
	Definir can Como Entero;
	//inicializando variables
	pre = 0; sbt = 0; igv = 0; tot = 0;
	//capturando valores
	Escribir "Ingresa el precio del producto:";
	Leer pre;
	Escribir "Ingresa la cantidad a comprar del producto:";
	Leer can;
	//realizando operaciones
	sbt = pre * can;
	igv = sbt * 0.18;
	tot = sbt + igv;
	//mostrando resultados
	Escribir "El subtotal es: ",sbt;
	Escribir "El igv es: ",igv;
	Escribir "El total es: ",tot;
FinAlgoritmo
