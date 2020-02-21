function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta= true;

	while(respuesta == true)
	{
		contador++
		var numero = prompt("Ingrese sus numeros");
		numero = parseInt(numero);

		//separamos los numeros positivos de los negativos
		if( numero < 0)
		{
			//operacion de negativo con multiplicacion
			negativo= negativo * numero;
		}else
		{
			//operacion de positivo con sumado
			positivo+= numero;
		}
		
		//al haber ingresado ya 2 o mas numeros preguntamos si el usuario desea continuar
		if(contador > 1 )
		{
			respuesta = confirm("Desea continuar?");
		}
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
	alert( " Usted a ingresado " + contador + " numeros" );

}//FIN DE LA FUNCIÓN