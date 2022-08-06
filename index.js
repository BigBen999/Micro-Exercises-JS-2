/*Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.
  /*let n1= prompt("Escribe un numero");
    let n2 = prompt ("Escribe otro numero");

if (n1>n2) {
    document.write(n1)
    
} else {
    document.write(n2)
    
}*/


/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
/*let num1= prompt("Escribe un numero");
let num2= prompt("Escribe otro numero");
let num3= prompt("Escribe otro numero mas");

if (num1>num2 && num1>num3) {
    document.write(num1);

    
} else if(num2>num3) {
    document.write (num2);

} else {
    document.write (num3);
}*/

/*Escribe un programa que pida un número y diga si es divisible por 2
var number1 = prompt("Escribe un número");
if (number1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}*/

/* Escribe un programa que pida una frase y escriba cuántas vocales hay en la frase.

function countingVowels(text) {

    let counterVowels = 0;
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];

    for (let index = 0; index < text.length;++index) {
        if(vowels.indexOf(text[index]) >=0) {
            ++counterVowels;
        }
        
    }
    return counterVowels;
}

console.log (countingVowels('Picapiedra'))*/


/*Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

function countingVowels1(text) {

    let counterVowels1 = 0;
    let vowels1 = ['a','A'];

    for (let index = 0; index < text.length;++index) {
        if(vowels1.indexOf(text[index]) >=0) {
            ++counterVowels1;
        }
        
    }
    return counterVowels1;
}

console.log (countingVowels1('Picapiedra'))*/



//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
/*var sentenceIntroduced = prompt("Introduzca una palabra o texto");
var aCont= 0; 
var eCont= 0;
var iCont= 0;
var oCont= 0;
var uCont= 0;
var otrosCont = 0;

for (var index = 0 ; index < sentenceIntroduced.length ; index++) {

	switch(sentenceIntroduced.charAt(index)) {

		case "a":
		aCont++;
		break;

		case "e":
		eCont++;
		break;

		case "i":
		iCont++;
		break;

		case "o":
		oCont++;
		break;

		default:
		uCont++;
		break;
	}
}
document.write("Totales: <br>" + "A: " + aCont + "<br>E: " + eCont + "<br>I: " + iCont + "<br>O: " + oCont + "<br>U: " + 
uCont);*/



//Escribe un programa que pida una frase y escriba las vocales que aparecen

/*function vowelCounter(str) {

    let vowels = 'aeiouAEIOU';
    let counter = 0;

    for (var index = 0 ; index < str.length ;index++) {
        if(vowels.indexOf(str[index])!== -1){
            console.log("Vowel [index] is: " + str[index]);
            counter += 1;
        }
        }
        return counter;
}
console.log(vowelCounter("Me llamo David del Castillo")); */

//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

/*var numb1 = prompt("Escribe un número");
if (numb1 % 2 === 0 || numb1 % 3 === 0 || numb1 % 5 === 0 || numb1 % 7 === 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}*/

//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
/*var num1 = prompt("Escribe un número");
if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
if (num1 % 2 === 0) {

document.write("Es divisible por 2. ");
}
if (num1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (num1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (num1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}*/

//Escribir un programa que escriba en pantalla los divisores de un número dado

/*var number1 = prompt("Escribe un número");
var index;
for (index=2;index < number1/2; index++) {
if (number1 % index === 0) {
document.write(index,", ");
}
}*/


//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

/*var numero1 = prompt("Escribe un número");
var numero2 = prompt("Escribe otro número");
var menor;
var index;
if (numero1 < numero2) {
menor = n1;
} else {
menor = numero2;
}
for (index=2; index < menor / 2; index++) {
if (numero1 % index === 0 && numero2 % index === 0) {
document.write(index,", ");
}
}*/

//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

/*var numero = prompt("Escribe un número");
var index;
var primo = true;
for (index=2; index < numero / 2; index++) {
if (numero % index === 0) {
primo = false;
}
}
if (primo) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}*/