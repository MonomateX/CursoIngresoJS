function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var max = 11
	var min = 1
	var numeroRandom = Math.floor(Math.random() * ( max - min ) + min );

	//mostramos los resultados
	if(numeroRandom >= 9)
	{
		alert( " Usted saco " + numeroRandom + " EXCELENTE ");
	}else
	{
		if(numeroRandom > 4)
		{
			alert( " Usted saco " + numeroRandom + " APROBADO ");
		}else
		{
			alert( " Usted saco " + numeroRandom + " Vamos, la proxima se puede ");
		}
	}
	

}//FIN DE LA FUNCIÓN