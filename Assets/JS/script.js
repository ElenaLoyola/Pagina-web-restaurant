$(document).ready(function() {
    //Agrandar cards:
    $("#card1").click(function() {
        $("#cardGrande").css (
            {
                "display": "block"
            }
        )
    });
    $(".close").click(function() {
        $("#cardGrande").css (
            {
                "display": "none"
            }
        )
    });

    $("#card2").click(function() {
        $("#cardGrande2").css (
            {
                "display": "block"
            }
        )
    });
    $(".close").click(function() {
        $("#cardGrande2").css (
            {
                "display": "none"
            }
        )
    });

    $("#card3").click(function() {
        $("#cardGrande3").css (
            {
                "display": "block"
            }
        )
    });
    $(".close").click(function() {
        $("#cardGrande3").css (
            {
                "display": "none"
            }
        )
    });

    //Mensaje al enviar formulario de reserva:
    $("#botonf2").click(function() {
        var nombreF2 = $("#nombre2").val();
        var correoF2 = $("#correo2").val();
        var nAsis = $("#asistentes").val();
        alert("Estimada(o) " + nombreF2 + " agradecemos su reserva. Hemos registrado " + nAsis + " asistentes. Se ha enviado el código de confirmación al correo: " + correoF2 + " Gracias por preferirnos.");
    });
});