function mostrar()
{

    var clave = prompt("ingrese el número clave.");
    var contador = 0
    while(clave != "utn750")
    //tambien se puede hacer de la siguiente forma
    //while(Clave.ToLowerCase != "utn750")
    {
        alert("Clave incorrecta");
        clave = prompt("Ingrese el número clave.");
        contador ++

    }
    alert("Bienvenido");

}//FIN DE LA FUNCIÓN
