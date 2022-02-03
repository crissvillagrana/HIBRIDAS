function validar(){
    var usuario = document.getElementById("user").value;
    var contra = document.getElementById("pass").value;
    if(usuario=="admin" && contra == "admin"){
        window.location = "welcome.html";
    }
}

function saltar(){
    window.location = "tablafac.html";
}