let mensaje_anterior;

function div1OnAlert(){
  let contenido = document.getElementById("div1").innerHTML;
  alert("Mensaje: "+ contenido);

}

function modifierForward(){
  //variable global
  mensaje_anterior = document.getElementById("div1").innerHTML;
  //modificacion del contenido del div
  document.getElementById("div1").
  innerHTML = '<p id="p1"> ...Cambio DIV...</p>';
  //modificacion de la funcion del boton modificador
  document.getElementById( "modificador" ).
  setAttribute( "onClick", "javascript: modifierBack();" );
  //Se muestra por consola el el conenido anterior del div
  console.log("variable Contenida: " + mensaje_anterior);

}


function modifierBack() {
  let contenido = document.getElementById("div1").innerHTML;
  document.getElementById("div1").innerHTML = mensaje_anterior;
  document.getElementById( "modificador" ).
  setAttribute( "onClick", "javascript: modifierForward();" );
  console.log("variable Contenida: " + contenido);
}
