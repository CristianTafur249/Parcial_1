const form= document.getElementById('form')
/* var URLactual = window.location.href; */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var nombre = getParameterByName('Nombre')
var email = getParameterByName('email')
var tell = getParameterByName('telefono')
var gusto =getParameterByName('gusto')
var porc= getParameterByName('porc')
console.log(nombre)
console.log(email)
console.log(tell)
console.log(gusto)
console.log(porc)
document.getElementById('Nombre').innerHTML = nombre
document.getElementById('email').innerHTML = email
document.getElementById('tell').innerHTML = tell
document.getElementById('gusto').innerHTML = gusto
document.getElementById('porc').innerHTML = porc