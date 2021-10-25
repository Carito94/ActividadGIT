function cálculo()
{
  var selección= document.getElementById("Categoría");
  var valorselec=parseFloat(selección.options[selección.selectedIndex].value);
  var cantidad= document.getElementById("Cantidad").value; 
  var Total= 0;


  switch(valorselec) 
  {

    case 1:
           Total= 200*0.2*cantidad;
             document.getElementById("Total").value=Total;
             break;
    case 2:
           Total= 200*0.5*cantidad;     
           document.getElementById("Total").value=Total; 
            break;
    case 3:
            Total= 200*0.85*cantidad;       
            document.getElementById("Total").value=Total; 
            break;  

}

}
function Limpiar()
{
document.getElementById("Formulario").reset();

}