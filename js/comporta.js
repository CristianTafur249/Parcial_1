function guardar() {
    /* console.log('Dentro de guardar') */
    var dato = document.getElementById('gustos').value
    console.log(dato)
    if(dato!=""){    var respu =document.getElementById('res')
    respu.innerHTML =""
    var tabla ="<tr>" 
    tabla += '<td id="gust">'
    tabla += dato
    tabla += '</td>'
    tabla += '<td id="porcent"> 0 </td>'
    tabla += '<td> <input id ="edit" type="button" onclick="editar()" value="editar">  </td>'
    tabla += "</tr>"
    respu.innerHTML =tabla
}

}
function limpia(){
    document.getElementById('gustos').value= "" 
    console.log('limpia')
    console.log(document.getElementById('gustos').value)
}