function mostrar()
{
	//declarar contadores y variables 
	var respuesta= true;
	var contador=0;
	var negativos=0;
	var positivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var DiferenciaPositivosNegativos=0; //(positivos - negativos)

	while(respuesta == true)
	{
		contador++
		//tomamos los numeros
		var numero = prompt("Ingrese los numeros deseados");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error");
			numero = parseInt(numero);
		}
		//Operaciones con numeros negativos
		if(numero < 0)
		{	
			contadorNegativos++;
			negativos+= numero;
		}else
		{
			if(numero == 0)
			{
				contadorCeros++
			}else
			{
				contadorPositivos++
				positivos+= numero;
			}
		}
		if ( numero % 2 == 0)
		{
			contadorPares++
		}
		respuesta = confirm("Desea continuar?");
	}


	promedioPositivos = positivos / contadorPositivos;	
	promedioNegativos = negativos / contadorNegativos;

	document.write(" Suma de positivos = " + positivos + ("<br>"));
	document.write(" Suma de negativos = " + negativos + ("<br>"));
	document.write(" Cantidad de positivos = " + contadorPositivos + ("<br>"));
	document.write(" Cantidad de negativos = " + contadorNegativos + ("<br>"));
	document.write(" Cantidad de ceros = " + contadorCeros + ("<br>"));
	document.write(" Cantidad de numeros pares = " + contadorPares + ("<br>"));
	document.write(" Promedio de positivos = " + promedioPositivos + ("<br>"));
	document.write(" Promedio de negativos = " + promedioNegativos + ("<br>"));
	document.write(" Diferencia entre positivos y negativos = " + ( positivos - negativos ) + ("<br>"));



}//FIN DE LA FUNCIÓN

//do
{
	
}//while