function mostrar()
{
    //tomo la edad  
    var edad = document.getElementById("edad").value;

    //utilizamos el if para informar si es adolescente
    if(edad >= 13 && edad <= 17)
    {
        alert("Sos un adolescente")
    }
}//FIN DE LA FUNCIÓN