/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

    // Declaramos las variables
    var importeIngresado;
    var importeParseado;
    var resultado;

    // Obtenemos los datos del ID
    importeIngresado = document.getElementById("importe").value;

    // Parseamos los datos
    importeParseado = parseInt(importeIngresado)

    // Realizamos la operacion
    resultado = importeParseado * 0.75

    // Mostramos el resultado en el ID
    document.getElementById("resultado").value = resultado;
}
