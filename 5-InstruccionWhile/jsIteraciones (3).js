function mostrar()
{

    var clave = prompt("ingrese el número clave.");
    var contador = 0
    while(clave != "utn750" && contador < 3 )
    //tambien se puede hacer de la siguiente forma
    //while(Clave.ToLowerCase != "utn750")
    {
        contador ++
        if(contador < 3)
        {
            clave = prompt("Error!! ingrese el nûmero clave.");
        }else
        {
            break
        }
        

    }
    
    if( contador == 3 )
    {
        alert("Numero de intentos excedidos");
    }else
    {
        alert("Bienvenido");
    }
        
        
        
        
        

}//FIN DE LA FUNCIÓN
