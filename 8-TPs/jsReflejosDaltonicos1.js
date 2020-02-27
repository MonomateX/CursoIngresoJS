/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{
    var ColorElegido;
    var random;
    var min = 7
    var max = 1

    tiempoInicio = new Date();
 
    random = Math.floor(Math.random() * (max - min) + min);

    switch(random)
    {
        case 1:
            ColorSecreto = "azul";
            break
        case 2:
            ColorSecreto = "amarillo";
            break
        case 3:
            ColorSecreto = "marron";
            break
        case 4:
            ColorSecreto = "verde";
            break
        case 5:
            ColorSecreto = "celeste";
            break
        case 6:
            ColorSecreto = "rojo";
            break
    }
    document.getElementById("ColorElejido").value = ColorSecreto;
	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	var tiempoFinal = new Date()
    var tiempoTotal;

    tiempoTotal = tiempoFinal - tiempoInicio;

    tiempoTotal /= 1000;

    if(colorParametro == ColorSecreto)
    {
        alert(" Gano y tardo " + tiempoTotal + " Segundos ");
    }
}//FIN DE LA FUNCIÓN
