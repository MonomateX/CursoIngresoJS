/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

    // Declaramos las variables
	var numeroDividendoIngresado;
    var numeroDivisorIngresado;
    var numeroDividendoParseado;
    var numeroDivisorParseado;
    var resultado;

    // Tomamos la informacion del ID
    numeroDividendoIngresado = document.getElementById("numeroDividendo").value;
    numeroDivisorIngresado = document.getElementById("numeroDivisor").value;

    // Parseamos los numeros
    numeroDividendoParseado = parseInt(numeroDividendoIngresado);
    numeroDivisorParseado = parseInt(numeroDivisorIngresado);

    // Realizamos la operacion
    resultado = numeroDividendoParseado % numeroDivisorParseado;

    // Declaramos el resultado
    alert(" El resto es " + resultado);
}
