function mostrar()
{
    var respuesta;
    var numero;
    var letra;
    var numeroPar;
    var contadorNumeroPar;
    var contadorNumeroImpar;
    var contadorCeros;
    var promedio;
    var acumulador;

    do 
    {
        do
        {
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);

        }while(isNaN(numero) || numero < -100 || numero > 100 );
        do
        {
            letra = prompt("Ingrese una letra");

        }while(!isNaN(letra))

        // Punto A
        numeroPar = numero % 2;

        if(numeroPar == 0)
        {
            contadorNumeroPar++;

        }else // Punto B
        {
            contadorNumeroImpar++;

        }

        // Punto C
        if(numero == 0)
        {
            contadorCeros++;
        }

        // Punto D
        



        respuesta = confirm("Desea continuar?");
    }while(respuesta);
}
