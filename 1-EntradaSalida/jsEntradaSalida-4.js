/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;
	dato = prompt("Coloque su nombre");  // toma el dato y lo almacena en la variable
	document.getElementById("elNombre").value=dato;  // muestra la informacion de la variable en la id
}

