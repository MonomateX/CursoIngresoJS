function mostrar()
{
    //tomo la edad  
    var edad = document.getElementById("edad").value;

    //utilizamos el IF para informar si no es adolescente
    if(edad < 13 || edad >= 18 )
    {
        alert("Usted no es un adolescente");
    }

}//FIN DE LA FUNCIÓN