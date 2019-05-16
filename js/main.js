


	

$(document).ready(function() {
    // Codigo a ejecutarse una vez que se carga la pagina

    // $("#posts-container").html("<h1>Hola jQuery</h1>");
    
    $("#publicar1").click(function() {
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
    });

});












// alert toma un menaje entre paréntesis y lo muestra en un cartel

//m alert('hola');

//console.log toma un valor y lo muestra en consola

//console.log('hola 123');

