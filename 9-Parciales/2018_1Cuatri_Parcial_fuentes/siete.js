function mostrar()
{
    //declaramos las variables
    var nota;
    var sexo;
    var acumulador = 0;
    var promedio;
    var contador = 0;
    var contadorDeVarones = 0;
    var notaMasBaja = 11;
    var sexoNotaMasBaja;
    //tomamos los datos

    while (contador < 5)
    {
        contador++;
        nota = prompt("Ingrese la nota del alumno");
        nota = parseInt(nota);
        
        while(nota < 0 || nota > 10 || isNaN(nota))
        {
            nota = prompt("Ingrese una nota valida");
            nota = parseInt(nota);
        }
        
        sexo = prompt("Ingrese el sexo del alumno f ó m");
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Ingrese el sexo del alumno f ó m");
        }
        
        //Punto A
        acumulador = acumulador + nota;

        //punto B
        if (nota < notaMasBaja)
        {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
        }

        //punto C
        if (nota >= 6 && sexo == "m")
        {
            contadorDeVarones++;
        }
    }
    //Punto A
    promedio = acumulador / 5;
    alert(" El promedio de las notas es de " + promedio );

    //Punto B
    alert(" La nota mas baja es de " + notaMasBaja + " y su sexo es " + sexoNotaMasBaja);

    //Punto C
    alert(" La cantidad de varones que su nota a sido mayor o igual a 6 a sido de " + contadorDeVarones );
}
