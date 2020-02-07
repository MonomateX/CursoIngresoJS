/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numeroUnoIngresado;
var numeroDosIngresado;
var numeroUnoParseado;
var numeroDosParseado;
var resultado;

function sumar()
{

    // Tomamos la informacion del ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    // Parseamos los numeros
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    // hacemos la operacion
    resultado = numeroUnoParseado + numeroDosParseado;

    // Mostramos el resultado
    alert(" El sumado es " + resultado);

}

function restar()
{

    // Tomamos la informacion del ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    // Parseamos los numeros
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    // hacemos la operacion
    resultado = numeroUnoParseado - numeroDosParseado;

    // Mostramos el resultado
    alert(" La Resta es " + resultado);
}

function multiplicar()
{ 
	
    // Tomamos la informacion del ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    // Parseamos los numeros
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    // hacemos la operacion
    resultado = numeroUnoParseado * numeroDosParseado;

    // Mostramos el resultado
    alert(" La multiplicacion es " + resultado);
}

function dividir()
{
	 
    // Tomamos la informacion del ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    // Parseamos los numeros
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    // hacemos la operacion
    resultado = numeroUnoParseado / numeroDosParseado;

    // Mostramos el resultado
    alert(" La division es " + resultado);
}
