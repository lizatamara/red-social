$(document).ready(function(){

	$("#boton-entrar").click(function(){

		var usuario = "liza";
        var password = "comit";
        var inputPassword = $("#login-password").val();
        var inputUsuario = $("#login-usuario").val();
        


        if (inputUsuario === "" || 
            inputPassword === "") {
            alert("Por favor complete todos los campos")
        } else {
            if (inputUsuario === usuario && 
                inputPassword === password) {
                alert("Login correcto");
            } else {
               alert("Login incorrecto");
            }
        }
    });



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

	$("#publicar1").click(function(){

		var inputTitulo = $("#titulo").val();
		var inputTexto = $("#texto").val();

		if (inputTitulo === "" || 
            inputTexto === ""){
            alert("Por favor complete todos los campos")
        } else {
                
        			$("#postnuevo").append(
            			'<div>' +
                			'<div>' +
                    			'<h4>' + 
                        			$("#titulo").val() +
                    			'</h4>' +
                    			'<p>' +
                        			$("#texto").val() +
                    			'</p>' +
                			'</div>' +
            			'</div>' + '<button type="button" class="btn btn-primary" id="publicar2">Publicar</button>'
        			);
    			};
            
        });


});