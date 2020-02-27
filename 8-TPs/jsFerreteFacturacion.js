/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//declaramos las variables
var precioUno;
var precioDos;
var precioTres;

//realizamos la operacion de sumado
function Sumar () 
{
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    var suma = precioUno + precioDos + precioTres;
    alert( " La suma es " + suma );
}
//sacamos el promedio
function Promedio () 
{
	precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    var promedio = precioUno + precioDos + precioTres;

    alert(" El promedio es " + (promedio / 3 ));
}
function PrecioFinal () 
{
	precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    var precio = precioUno + precioDos + precioTres;
    
    alert(" El Precio Final es " + (precio * 1.21));
}