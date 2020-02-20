function mostrar()
{

	var contador=0;
	var acumulador=0;
	var salir = "No";

	while(contador < 5 && salir == "No")
	{
		contador++;
		var numero = prompt("Ingrese un numero");
		// validar
		numero = parseInt(numero);

		if(isNaN(numero))
		{	
			numero = blank;
			salir = "Si";
		}
		
		// acumulamos
		acumulador+= numero;

	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN