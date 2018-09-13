//callback

//el argumento que recibe una funcion
//es otra funcion
//tambien llamada como funcion de orden superior
function saludar(name ,callback){
    callback(name);
 }   

const hablaEspanol = function(nombre){
    console.log("Hola ",nombre);
}
const speakEnglish = function (name){
    console.log("Hello ", name);
}