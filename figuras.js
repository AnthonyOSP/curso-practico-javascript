// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    var input = document.getElementById("inputCuadrado");
    var value = input.value;

    var perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
    var input = document.getElementById("inputCuadrado");
    var value = input.value;

    var area = areaCuadrado(value);
  alert(area);
}

//triangulo
function calcularPerimetroTriangulo() {
    var input1 = document.getElementById("inputTriangulo1");
    var value1 = input1.value1;
    var input2 = document.getElementById("inputTriangulo2");
    var value2 = input2.value2;
    var input3 = document.getElementById("inputTriangulo3");
    var value3 = input3.value3;

    var perimetro = perimetroTriangulo(value1,value2,value3);
  alert(perimetro);
}
function calcularAreaCuadrado() {
    var input = document.getElementById("inputTriangulo");
    var value = input.value;

    var area = areaTriangulo(value);
  alert(area);
}

//circulo
function calcularPerimetroCirculo() {
    var input = document.getElementById("inputCirculo");
    var value = input.value;

    var perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
    var input = document.getElementById("inputCirculo");
    var value = input.value;

    var area = areaCirculo(value);
  alert(area);
}