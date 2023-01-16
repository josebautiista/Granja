let campo = document.getElementById("villa")
let contexto = campo.getContext("2d")
  campo.addEventListener("click", function(evento) {
    console.log(evento)
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
      contexto.drawImage(vaca.imagen, evento.offsetX - 40, evento.offsetY - 40);
    }

    else if (cerdos) {
      var cerdo =
      {
        url:"cerdo.png"
      };
      cerdo.imagen = new Image();
      cerdo.imagen.src= cerdo.url;
      contexto.drawImage(cerdo.imagen, evento.offsetX - 40, evento.offsetY - 40);
    }

    else if (pollos) {
      var pollo =
      {
        url:"pollo.png"
      };
      pollo.imagen = new Image();
      pollo.imagen.src= pollo.url;
      contexto.drawImage(pollo.imagen, evento.offsetX - 40, evento.offsetY - 40);
    }

  });

