//****************************************************************************/
//Código del cuadrado Inicio
//****************************************************************************/
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;   
} 

function areaCuadrado(lado){
 return lado * lado
}

console.groupEnd();
//****************************************************************************/
//Código del cuadrado Final
//****************************************************************************/

//****************************************************************************/
//Código del triángulo Inicio
//****************************************************************************/
console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
   return (base * altura) / 2;
}  

console.groupEnd();
//****************************************************************************/
//Código del triángulo Final
//****************************************************************************/

//****************************************************************************/
//Código del círculo Inicio
//****************************************************************************/
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circuferencia
function perimetroCirculo(radio){
   const diametro =  diametroCirculo(radio);
   return diametro * PI;
}

// Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();
//****************************************************************************/
//Código del círculo Final
//****************************************************************************/


//****************************************************************************/
//Codigo Triangulo Isoceles Inicio
//****************************************************************************/
console.group();

function alturaTrianguloIsoceles(trianguloGrandeLadoA, trianguloGrandeLadoB,trianguloGrandeLadoBase)
{
    if(trianguloGrandeLadoA != trianguloGrandeLadoB){
        console.error("Los lados a y b no son iguales");
    }else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * 
        trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * 
        trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt
        (trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

console.groupEnd();
//****************************************************************************/
//Codigo Triangulo Isoceles Final
//****************************************************************************/

//****************************************************************************/
//Aquí interactuamos con el HTML
//****************************************************************************/

//****************************************************************************/
//Cuadrado Interación Inicio
//****************************************************************************/
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
//****************************************************************************/
//Cuadrado Interación Final
//****************************************************************************/

//****************************************************************************/
//Triangulo Interación Inicio
//****************************************************************************/
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert ("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("InputAlturaTriangulo");
    const value1 = Number(altura.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value2 = Number(base.value);

    const area = areaTriangulo(value1, value2);
    alert ("El perimetro del triangulo es: " + area);
}
//****************************************************************************/
//Triangulo Interación Final
//****************************************************************************/

//****************************************************************************/
//Círculo Interación Inicio
//****************************************************************************/
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert ("El perimetro de círculo es: " + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area =  areaCirculo(value)
    alert ("El área del circulo es:" + area)
}
//****************************************************************************/
//Círculo Interación Final
//****************************************************************************/

//****************************************************************************/
//Triangulo Isoceles Interación Inicio
//****************************************************************************/
function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputTrianguloIsoceles1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloIsoceles2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTrianguloIsoceles");
    const value3 = Number(base.value);

    const altura = alturaTrianguloIsoceles(value1, value2, value3);
    alert("La altura del triangulo es: " + altura);

}

//****************************************************************************/
//Triangulo Isoceles Interación Final
//****************************************************************************/