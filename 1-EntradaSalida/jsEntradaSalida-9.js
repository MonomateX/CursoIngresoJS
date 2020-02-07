/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    // Declaramos las variables
    var sueldoIngresado;
    var sueldoParseado;
    var resultado;

	// Obtenemos el dato de la ID
    sueldoIngresado = document.getElementById("sueldo").value;

    // Parseamos el dato
    sueldoParseado = parseInt(sueldoIngresado);

    // Hacemos la operacion
    resultado = sueldoParseado * 1.10

    // Mostramos el resultado en la ID
    document.getElementById("resultado").value = resultado;
}
