let mensaje_anterior;

function div1OnAlert(){
    let contenido = document.getElementById("div1").innerHTML;
    alert("Mensaje: "+ contenido);

}

function modifierForward(){
    mensaje_anterior = document.getElementById("div1").innerHTML;
    document.getElementById("div1").innerHTML = '<p id="p1"> ...Cambio DIV...</p>';
    document.getElementById( "modificador" ).
    setAttribute( "onClick", "javascript: modifierBack();" );
    //console.log(boton_alerta);
    console.log("variable Contenida: " + mensaje_anterior);
}


function modifierBack() {
  let contenido = document.getElementById("div1").innerHTML;
  document.getElementById("div1").innerHTML = mensaje_anterior;
  document.getElementById( "modificador" ).
  setAttribute( "onClick", "javascript: modifierForward();" );

}
