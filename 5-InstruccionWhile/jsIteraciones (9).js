function mostrar()
{

	var contador=0;
	// declarar variables
	var valorMaximo = 0;
	var valorMinimo = 0;
	var respuesta= true;
	var primeraVez= true;

	while(respuesta == true)
	{
		//obtenemos los numeros
		contador++
		var numero = prompt("Ingrese los numeros deseados");
		numero = parseInt(numero);	
		
		//operaciones
		if(primeraVez == true)
		{
			primeraVez = false;
			valorMinimo = numero;
			valorMaximo = numero;
		}else
		{
			if(valorMinimo>= numero)
			{
				valorMinimo= numero;
			}
			if(valorMaximo < numero )
			{
				valorMaximo= numero;
			}
		}	
		respuesta = confirm("Desea continuar?");
	}

	document.getElementById("maximo").value = valorMaximo;
	document.getElementById("minimo").value = valorMinimo;
	alert( " Usted a ingresado " + contador + " numeros ");

}//FIN DE LA FUNCIÓN