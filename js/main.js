

$(document).ready(function() {
    
    
    $(".btn btn-primary").click(function() {
        $("#postnuevo").append(
                    '<h4 class="card-title">' + 
                        $("#titulo").val() +
                    '</h4>' +
                    '<p class="card-text">' +
                        $("#post").val() +
                    '</p>'
        );
    });

});
	












// alert toma un menaje entre paréntesis y lo muestra en un cartel

//m alert('hola');

//console.log toma un valor y lo muestra en consola

//console.log('hola 123');