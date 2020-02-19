function mostrar()
{
	//declaro las variables
	var numeroRandom;
	var min = 1
	var max = 11
	//Genero el número RANDOM entre 1 y 10 
	numeroRandom = Math.floor(Math.random() * ( max - min ) + min );

	//mostramos el mensaje en consola
	console.log(numeroRandom);

}//FIN DE LA FUNCIÓN