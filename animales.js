let campo = document.getElementById("villa").getContext("2d")

  document.addEventListener("click", function(evento) {

    var cerdos = document.getElementById("cerdos").checked
    var vacas = document.getElementById("vacas").checked
    var pollos = document.getElementById("pollos").checked

    if (vacas) {
        var vaca =
      {
        url:"vaca.png"
      };
      vaca.imagen = new Image();
      vaca.imagen.src= vaca.url;
      campo.drawImage(vaca.imagen, evento.layerX - 40, evento.layerY - 40);
    }

    else if (cerdos) {
      var cerdo =
      {
        url:"cerdo.png"
      };
      cerdo.imagen = new Image();
      cerdo.imagen.src= cerdo.url;
      campo.drawImage(cerdo.imagen, evento.layerX - 40, evento.layerY - 40);
    }

    else if (pollos) {
      var pollo =
      {
        url:"pollo.png"
      };
      pollo.imagen = new Image();
      pollo.imagen.src= pollo.url;
      campo.drawImage(pollo.imagen, evento.layerX - 40, evento.layerY - 40);
    }

  });

