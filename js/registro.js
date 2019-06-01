$(document).ready(function(){

	$("#boton-registro").click(function(){

		var inputEmail = $("#registro-email").val();
		var inputUsuarioRegistro = $("#registro-usuario").val();
        var inputPasswordRegistro = $("#registro-pw").val();


		if (inputUsuarioRegistro === "" || 
            inputPasswordRegistro === "" || inputEmail === ""){
            alert("Por favor complete todos los campos")
        } else {
                alert("Registro exitoso");
            }
        });

});
