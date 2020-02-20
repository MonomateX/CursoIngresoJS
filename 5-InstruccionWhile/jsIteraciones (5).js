function mostrar()
{
    
    var sexo = prompt("ingrese f ó m .");
    var contador = 0
    while( sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m" )
    {   
        contador++
        sexo = prompt("ERROR! ingrese f ó m .");
        
        
        
    }

    
        document.getElementById('Sexo').value = sexo;
    
    

}//FIN DE LA FUNCIÓN