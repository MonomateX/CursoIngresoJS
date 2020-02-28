function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var temperaturasPares = 0;
    var marcaMasPesada;
    var productoMasPesado = 0;
    var cantidadBajoCero = 0;
    var contadorProductos = 0;
    var pesoMax = 0;
    var pesoMin = 101;
    var acumuladorPeso = 0;


    do
    {
        do
        {
            marca = prompt("Ingresar marca del producto");
        }while(!isNaN(marca));

        do
        {
            peso = prompt("Ingrese un peso entre 1 y 100");
            peso = parseInt(peso);
        }while(isNaN(peso) || peso < 1 || peso > 100);

        do
        {
            temperatura = prompt("Ingrese temperatura de almacenamiento (entre -30 y 30)");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura < -30 || temperatura > 30);

        // Punto A
        if(temperatura % 2 == 0)
        {
            temperaturasPares++;
        }

        // Punto B
        if(peso > productoMasPesado)
        {
            productoMasPesado = peso;
            marcaMasPesada = marca
        }

        // Punto C
        if(temperatura < 0)
        {
            cantidadBajoCero++;
        }

        // Punto D
        contadorProductos++;
        acumuladorPeso+= peso;


        // Punto F
        if(peso > pesoMax)
        {
            pesoMax = peso;
        }else if(peso < pesoMin)
        {
            pesoMin = peso
        }

        respuesta = confirm("Desea continuar");
    }while(respuesta);

    // Punto A
    document.write( "Cantidad de temperaturas pares = " + temperaturasPares + ("<br>"));
    // Punto B
    document.write( "Marca de producto mas pesado = " + marcaMasPesada + ("<br>"));
    // Punto C
    document.write( "Cantidad de productos a menos de 0 grados = " + cantidadBajoCero + ("<br>"));
    // Punto D
    document.write( "Promedio del peso de los productos = " + acumuladorPeso / contadorProductos + ("<br>"));
    // Punto F
    document.write( "Peso Maximo = " + pesoMax + ("<br>"));
    document.write( "Peso Minimo = " + pesoMin + ("<br>"));

}
