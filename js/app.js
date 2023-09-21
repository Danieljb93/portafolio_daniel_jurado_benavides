const seccionesPagina = new fullpage("#fullpage", {
    navigation: true,
    navigationPosition: "right",
    anchors: ["Inicio", "Acerca", "Habilidades", "Proyectos", "Contacto"],
    navigationTooltips: ["Inicio", "Habilidades", "Acerca", "Proyectos", "Contacto"],
    scrollingSpeed: 800,
    easing: "easeInOutCubic",
    menu: "#miMenu",
    showActiveTooltip: true,
    onLeave: function (origin, destination, direction) {
        if (origin.anchor == "Inicio") {
            nav.classList.add("nuevoBar");
        } else if (origin.anchor == "Acerca" && destination.anchor == "Inicio" && direction == "up") {
            nav.classList.remove("nuevoBar");
        } else if (origin.anchor == "Proyectos" && destination.anchor == "Inicio") {
            nav.classList.remove("nuevoBar");
        } else if (origin.anchor == "Contacto" && destination.anchor == "Inicio") {
            nav.classList.remove("nuevoBar");
        } else if (origin.anchor == "Habilidades" && destination.anchor == "Inicio") {
            nav.classList.remove("nuevoBar");
        }
    },
});

let slideEdit = document.getElementById("slideEdit");

let contenidoSlide1 = ` <div class="container-title">
<h1 class="title-proyectos">p<br>r<br>o<br>y<br>e<br>c<br>t<br>o<br>s</h1>
</div>


<div class="galeria correciones-galeria">

<!--CENTRO DE IDIOMAS-->
          <div class="foto">
            <div class="contenedor-modal">
              <img src="img/centro.png" alt="" />
              <div class="overlay">
                <h5> <a href="https://centrodeidiomas.udenar.edu.co/" title="centro" target="_blank">
                    <img src="img/logo.png" alt=""></a>Centro de Idiomas</h5>
                <p>Sitio web, adapatado para todas las plataformas y realizado Se creó un sitio web utilizando WordPress con una base de HTML, CSS y funcionalidades adicionales implementadas en JavaScript.</p>

                <br><a href="https://centrodeidiomas.udenar.edu.co/" title="Mi Podcast" target="_blank">
                  <h3>Ver sitio web</h3>
                </a>
                
                </a>
              </div>
            </div>
          </div>
          <!--DRI-->
          <div class="foto">
            <div class="contenedor-modal">
              <img src="img/dri.png" alt="" />
              <div class="overlay">
                <h5> <a href="https://www.udenar.edu.co/direccion-de-relaciones-internacionales/" title="Podcast" target="_blank">
                  <img src="img/logo.png" alt="">  </a>DRI</h5>
                <p>Sitio web, adapatado para todas las plataformas y realizado Se creó un sitio web utilizando WordPress con una base de HTML, CSS y funcionalidades adicionales implementadas en JavaScript.</p>

                <br><a href="https://www.udenar.edu.co/direccion-de-relaciones-internacionales/" title="Mi Podcast" target="_blank">
                  <h3>Ver sitio web</h3>
                </a>
                
                </a>
              </div>
            </div>
          </div>`;

let contenidoSlide2 = `   <div class="slide proyecto2" id="slideEdit2">


<!--RESTAURANTE-->
          <div class="foto">
            <div class="contenedor-modal">
              <img src="img/eva.png" alt="" />
              <div class="overlay">
                <h5> <img src="img/logo.png" alt="">Restaurante</h5>
                <p>Sitio web, adapatado para todas las plataformas y realizado Se creó un sitio web utilizando HTML, CSS y  JavaScript, ademas con estilos de bootstrap </p>
                <br><a href="https://evalounge.netlify.app/"  target="_blank">
                  <h3>Ver sitio web</h3>
                </a>
                <br> <a href="https://github.com/Danieljb93/evalounge_DanielJuradoBenavides"  target="_blank">
                  <h3> Ver repositorio</h3>
                </a>
              </div>
            </div>
          </div>
          <!--ECOMMERS-->
          
          <div class="foto">
            <div class="contenedor-modal">
              <img src="img/ecoome.png" alt="" />
              <div class="overlay">
                <h5> <img src="img/logo.png" alt="">
                  Ecommers
                <p>Ecommers realizado con React, totalmente funcional </p></h5>
                
                <br> <a href="https://github.com/Danieljb93/La_Fortaleza " title="ec" target="_blank">
                  <h3>Ver repositorio</h3>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
`;

let contenidoSlide3 = `<div class="galeria ">
<!--FERRETERIA-->
          <div class="foto">
            <div class="contenedor-modal">
              <img src="img/java.png" alt="ecommers" />
              <div class="overlay">
                <h5><img src="img/logo.png" alt=""> Ferretería</h5>
                <p>
                  Es una aplicación web simula un ecommers
                  notas. Totalmente funcional, hecha con JavaScript. </p>
                <br> <a href="https://github.com/Danieljb93/evalounge_DanielJuradoBenavide"  target="_blank">Ver
                  Repositorio</a>
              </div>
            </div>
          </div>
          
          

          
        </div>
      </div>`;

let slideEdit2 = document.getElementById("slideEdit2");
containerGaleria = document.getElementById("containerGaleria");

let slideEdit3 = document.getElementById("slideEdit3");

if (screen.width < 600) {
    slideEdit.innerHTML = contenidoSlide1;
    slideEdit2.innerHTML = contenidoSlide2;

    slideEdit3.classList.remove("display-none");

    slideEdit3.innerHTML = contenidoSlide3;

    setInterval(function () {
        let body = document.getElementsByTagName("body");
        let atributo = body[0].getAttribute("class");

        if (atributo != "fp-viewing-Inicio") {
            nav.classList.add("nuevoBar");
        } else {
            nav.classList.remove("nuevoBar");
        }
    }, 400);
} else {
    slideEdit3.classList.add("display-none");
}
