window.addEventListener('load', inicio, false);

function inicio() {
    //opciones Estrategias para tus ofertas
    document.getElementById('E1').addEventListener('dragstart', drag, false);
    document.getElementById('E2').addEventListener('dragstart', drag, false);
    document.getElementById('E3').addEventListener('dragstart', drag, false);
    document.getElementById('E4').addEventListener('dragstart', drag, false);
    document.getElementById('E5').addEventListener('dragstart', drag, false);
    document.getElementById('E6').addEventListener('dragstart', drag, false);
    document.getElementById('E7').addEventListener('dragstart', drag, false);
    document.getElementById('E8').addEventListener('dragstart', drag, false);
    document.getElementById('E9').addEventListener('dragstart', drag, false);
    document.getElementById('E10').addEventListener('dragstart', drag, false);
    document.getElementById('E11').addEventListener('dragstart', drag, false);
    document.getElementById('E12').addEventListener('dragstart', drag, false);
    document.getElementById('E13').addEventListener('dragstart', drag, false);
    document.getElementById('E14').addEventListener('dragstart', drag, false);
    document.getElementById('E15').addEventListener('dragstart', drag, false);
    document.getElementById('E16').addEventListener('dragstart', drag, false);
    document.getElementById('E17').addEventListener('dragstart', drag, false);
    document.getElementById('E18').addEventListener('dragstart', drag, false);
    document.getElementById('E19').addEventListener('dragstart', drag, false);
    document.getElementById('E20').addEventListener('dragstart', drag, false);
    document.getElementById('E21').addEventListener('dragstart', drag, false);
    document.getElementById('E22').addEventListener('dragstart', drag, false);
    document.getElementById('E23').addEventListener('dragstart', drag, false);
    document.getElementById('E24').addEventListener('dragstart', drag, false);
    document.getElementById('E25').addEventListener('dragstart', drag, false);
    document.getElementById('E26').addEventListener('dragstart', drag, false);
    document.getElementById('E27').addEventListener('dragstart', drag, false);
    document.getElementById('E28').addEventListener('dragstart', drag, false);
    document.getElementById('E29').addEventListener('dragstart', drag, false);
    document.getElementById('E30').addEventListener('dragstart', drag, false);
    document.getElementById('E31').addEventListener('dragstart', drag, false);
    document.getElementById('E32').addEventListener('dragstart', drag, false);
    document.getElementById('E33').addEventListener('dragstart', drag, false);
    document.getElementById('E34').addEventListener('dragstart', drag, false);
    document.getElementById('E35').addEventListener('dragstart', drag, false);
    document.getElementById('E36').addEventListener('dragstart', drag, false);        
    
    
    document.getElementById('recuadro').addEventListener('dragover', permitirDrop, false);        
    document.getElementById('recuadro').addEventListener('drop', drop, false);        
    document.getElementById('recuadro2').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro2').addEventListener('drop', drop, false);
    document.getElementById('recuadro3').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro3').addEventListener('drop', drop, false); 
    document.getElementById('recuadro4').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro4').addEventListener('drop', drop, false);  
    document.getElementById('recuadro5').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro5').addEventListener('drop', drop, false);  
    document.getElementById('recuadro6').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro6').addEventListener('drop', drop, false);  
    document.getElementById('recuadro7').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro7').addEventListener('drop', drop, false);  
    document.getElementById('recuadro8').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro8').addEventListener('drop', drop, false);  
    document.getElementById('recuadro9').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro9').addEventListener('drop', drop, false);  
    document.getElementById('recuadro10').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro10').addEventListener('drop', drop, false);  
    document.getElementById('recuadro11').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro11').addEventListener('drop', drop, false);  
    document.getElementById('recuadro12').addEventListener('dragover', permitirDrop, false);
    document.getElementById('recuadro12').addEventListener('drop', drop, false);  
}

function drag(ev)
{
    ev.dataTransfer.setData("Text",ev.target.id);
}    

function drop(ev)
{
    ev.preventDefault();
    var dato=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(dato));
}  

function permitirDrop(ev)
{
    ev.preventDefault();
}