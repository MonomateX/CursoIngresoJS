function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var iterador= 5;

	iterador = prompt("Cuantos numeros desea ingresar?")

	while(contador < 5 || respuesta == "si")
	{
		contador++
		var numero = prompt("Ingrese un numero");

		//validamos
		numero = parseInt(numero)

		if(isNaN(numero))
		{
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		}
		acumulador+= numero

	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN