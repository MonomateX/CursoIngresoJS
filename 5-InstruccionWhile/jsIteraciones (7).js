function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var iterador=0;

	iterador = prompt("Cuantos numeros desea ingresar?");

	while(contador < iterador & respuesta == "si")
	{
		contador++
		var numero = prompt("Ingrese un numero");

		//validamos
		numero = parseInt(numero);

		if(isNaN(numero))
		{
			numero = prompt("Ingrese un numero valido");
			if(numero == null)
			{
				numero = blank;
				respuesta= "no";
				break
			}
			numero = parseInt(numero);
		}
		acumulador+= numero;

	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN