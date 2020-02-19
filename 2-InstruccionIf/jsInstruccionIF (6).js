function mostrar()
{
    //tomo la edad  
    var edad = document.getElementById("edad").value;

    //utilizamos el if para informar al menor, adolescente o mayor de edad
    if(edad >= 18)
    {
        alert("Usted es mayor de edad");
    }else
    {
        if(edad >= 13)
        {
            alert("Usted es un adolescente");
        }else
        {
            alert("Usted es un niño");
        }
    }



}//FIN DE LA FUNCIÓN