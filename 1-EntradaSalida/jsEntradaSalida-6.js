/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    // Declaro las variables
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;

    // Obtener los datos por id
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    // Parseo de numeros
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    // Operacion de sumado
    resultado = numeroUnoParseado + numeroDosParseado;

    // Muestra el resultado
    alert(" El resultado es " + resultado);
}

