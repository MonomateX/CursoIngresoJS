function mostrar()
{
    //tomo la edad y estado civil
    var edad = document.getElementById("edad").value;
    var estadoCivil = document.getElementById("estadoCivil").value;

    //determinamos si es soltero y/o menor
    if(estadoCivil == "Soltero" && edad >= 18)
    {
        alert("Es soltero y no es menor");
    }


}//FIN DE LA FUNCIÓN