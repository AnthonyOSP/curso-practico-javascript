
console.group("Cuadrado");
var ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: "+ ladoCuadrado + "cm");

var perimetroCuadrado = ladoCuadrado * 4;
console.log("Los perimetro del cuadrado mide: "+ perimetroCuadrado + "cm");

var areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("Los area del cuadrado mide: "+ areaCuadrado + "cm2");
console.groupEnd();
//Codigo del triangulo
console.group("Triangulo");
var ladoTriangulo1 = 6;
var ladoTriangulo2 = 6;
var baseTriangulo3 = 4;
var alturaTriangulo = 10;

console.log("Los lados del Triangulo miden: "+ ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " +baseTriangulo3 + "cm");

var perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3 ;
console.log("Los perimetro del Triangulo mide: "+ perimetroTriangulo + "cm");

var areaTriangulo = (baseTriangulo3*alturaTriangulo)/2 
console.log("Los area del Triangulo mide: "+ areaTriangulo + "cm");

console.groupEnd();

//codigo circulo
console.group("Circulo");

//radio
var radioCirculo = 4;
console.log("El radio del circulo mide: "+ radioCirculo + "cm");
//diametro
var diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo mide: "+ diametroCirculo + "cm");
//pi
var PI = Math.PI;
console.log("El valor PI es: "+ PI);
//circunferencia
var perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo mide: "+ perimetroCirculo + "cm");
//area
var areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo mide: "+ areaCirculo + "cm");

console.groupEnd();