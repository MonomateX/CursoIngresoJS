/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
function comenzar()
{
	
    selfTimeout(terminarJuego, 4000);
    //^ Ejecuta al llegar a x tiempo
    //selfInterval = cada x tiempo ejecuta ese comando
}//FIN DE LA FUNCIÓN
function Responder()
{
	


}//FIN DE LA FUNCIÓN
function terminarjuego()
{
    console.log(" Terminando juego");
    var otro = confirm("Juego terminado, Desea comenzar otro?")




}