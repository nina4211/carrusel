document.addEventListener('DOMContentLoaded', function() {
    const imagenes = [
      'https://steamuserimages-a.akamaihd.net/ugc/1016067628656126735/DDC973F0E54452551ED5266EE61227C55C354066/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
      'https://i.pinimg.com/736x/a8/47/c0/a847c0a42b4631d4a296185d3e756d82.jpg',
      'https://i.blogs.es/f369ac/haikyuu/450_1000.jpeg',
      'https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1625292510/content-items/008/359/927/vio8-original.jpg?1625292510',
      'https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/styles/amp_1200x675_16_9/public/field/image/hayao-miyazaki-viento-levanta-studio-ghibli.jpg?itok=ZpvqvRUZ'
    ];
  
    const imgElement = document.getElementById('imagen');
    const anteriorBtn = document.getElementById('anterior-btn');
    const siguienteBtn = document.getElementById('siguiente-btn');
    let indiceImagen = 0;
  
    function mostrarImagen() {
      imgElement.src = imagenes[indiceImagen];
    }
  
    function siguienteImagen() {
      indiceImagen = (indiceImagen + 1) % imagenes.length;
      mostrarImagen();
    }
  
    function anteriorImagen() {
      indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
      mostrarImagen();
    }
  
    mostrarImagen();
  
    siguienteBtn.addEventListener('click', siguienteImagen);
    anteriorBtn.addEventListener('click', anteriorImagen);
  });
  