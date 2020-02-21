function mostrar()
{
    
    var sexo = prompt("ingrese f ó m .");
    var contador = 0;
    while( contador < 2 && (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") )
    {   
        contador++
        sexo = prompt("ERROR! ingrese f ó m .");
        if(contador == 2)
        {
            alert("Intentos Excedidos");
            sexo = blank
        }
    }
        document.getElementById('Sexo').value = sexo;
    
    

}//FIN DE LA FUNCIÓN