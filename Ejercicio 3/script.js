function Enviar() {
    var fecha = document.getElementById("fecha").value
    var bebida = document.getElementById("bebida").value
    var cantidad = document.getElementById("cantidad").value

    if (bebida =="agua"){
        if (cantidad<8){
            var mensaje = ("tomar mas agua");  
        } else if (cantidad>8){
            var mensaje = ("meta alacanzada");
        } else if (votos=8){
            var mensaje = ("meta alcanzada");
        }
    } else if (){
        var mensaje = ("tomar mas agua");
    }
    
    document.getElementById("drinktable").insertRow(-1).innerHTML = '<tr><td>'+fecha+'</td><td>'+bebida+'</td><td>'+cantidad+'</td><td>'+mensaje+'</td></tr>';
}