var contador=0
var contador2=0
const formulario = document.getElementById('formu')


function guardar() {
    /* console.log('Dentro de guardar') */
    var dato = document.getElementById('gustos').value
    /* console.log(dato) */
    if(dato!=""){    var respu =document.getElementById('res')
    contador2++
    /* respu.innerHTML ="" */
    var tabla ='<tr id="gus">' 
    tabla += '<td><input id="gusto" form="formu" value="'+dato+'" disabled>'
    tabla += '</td>'
    tabla += '<td > <input id="porcn" form="formu" value="0" disabled> </td>'
    tabla += '<td> <input id ="edit" type="button" onclick="editar()" value="editar">  </td>'
    tabla += "</tr>"
    respu.innerHTML +=tabla
    }

}
function enviar(){
    var gusto = document.getElementById('gusto').value
   var porcen =document.getElementById('porcn').value
    if(document.getElementById('gusto')!= null && document.getElementById('porcn').value!= null){
        document.getElementById('gustos').value= gusto
        document.getElementById('porc').value = porcen  
    }
    
}
function limpia(){
    document.getElementById('gustos').value= "" 
    /* console.log('limpia')
    console.log(document.getElementById('gusto').value) */
}
function limpiarT(){
    document.getElementById('res').innerHTML=""
}
function editar(){
    if(contador<1){
        contador++
        var gusto = document.getElementById('gusto')
        var porcen= document.getElementById('porcn') 
        gusto.disabled = false
        porcen.disabled=false
         document.getElementById('edit').value="En edición"
         var edit= document.getElementById('edit')
         edit.disabled = true
        
    
    }else{
        alert('Solo se puede editar un campo por favor recargue la pg para continuar')
    }
}