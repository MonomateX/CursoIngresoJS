function mostrar()
{
    //tomo la edad  
    var edad = document.getElementById("edad").value;

    //utilizamos el if para informar si es menor o mayor de edad
    if(edad >= 18 )
    {
        alert("Sos mayor de edad");
    }else
    {
        alert("Sos menor de edad");
    }

}//FIN DE LA FUNCIÓN