function mostrar()
{
    // Declaramos las variables
    var respuesta;
    var numero;
    var letra;
    var numeroPar;
    var contadorNumeroPar = 0;
    var contadorNumeroImpar = 0;
    var contadorCeros = 0;
    var promedio = 0;
    var acumulador = 0;
    var acumuladorNegativos = 0;
    var numeroMax = -101;
    var letraMax;
    var numeroMin = 101;
    var letraMin;

    do 
    {
        do
        {
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);

            if(numero < 0 )
            {
                acumuladorNegativos+= numero;
            }else
            {
                acumulador+= numero
            }

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
        if(numero >= 0)
        {
            promedio++;
        }

        // Punto F
        if(numero > numeroMax)
        {
            numeroMax = numero;
            letraMax = letra;
        }
        if(numero < numeroMin)
        {
            numeroMin = numero;
            letraMin = letra;
        }

        respuesta = confirm("Desea continuar?");
    }while(respuesta);

    

    //Mostramos los resultados mediante document.write

    // Punto A
    document.write(" Numeros pares = " + contadorNumeroPar + ("<br>"));
    // Punto B
    document.write(" Numeros impares = " + contadorNumeroImpar + ("<br>"));
    // Punto C
    document.write(" Cantidad de ceros = " + contadorCeros + ("<br>"));
    // Punto D
    document.write(" Promedio de numeros positivos = " + acumulador / promedio + ("<br>"));
    // Punto E
    document.write(" Suma de numeros negativos = " + acumuladorNegativos + ("<br>"));
    // Punto F
    document.write(" Numero y letra de maximo " + numeroMax + letraMax + ("<br>"));
    document.write(" Numero y letra de minimo " + numeroMin + letraMin + ("<br>"));
}
