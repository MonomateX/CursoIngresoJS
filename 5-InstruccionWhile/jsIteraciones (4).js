function mostrar()
{

	var numero;
	var contador = 0
	while( contador < 3 && (numero < 0 || numero > 9 || isNaN(numero)))
	{
		contador++;
		numero = prompt("Ingrese un número entre 0 y 10");
		numero = parseInt(numero);

	}
	if(contador == 3)
	{
		alert("Intentos excedidos")
		numero == blank
	}
	document.getElementById("Numero").value = numero;
		
	

}//FIN DE LA FUNCIÓN