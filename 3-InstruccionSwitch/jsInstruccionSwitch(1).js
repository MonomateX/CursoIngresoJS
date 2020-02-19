function mostrar()
{
    //tomo el mes
    var mesDelAño = document.getElementById('mes').value;

    //informar evento dependiendo del mes
    switch (mesDelAño) 
    {
        case "Enero":
            alert("Que comienzes bien el año!!!");
            break;
        case "Marzo":
            alert("A clases!!!");
            break;
        case "Julio":
            alert("Se vienen las vacaciones!!!");
            break;
        case "Diciembre":
            alert("Felices fiestas!!!");
            break;
        default:
            alert("No hay evento registrado");
            break;
    }
}//FIN DE LA FUNCIÓN