"uses strict";

document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo(0, 0);

    /*cursor */
    let cursor = document.querySelector("#idCursor");
    let items = document.querySelectorAll(".videoCarrousel");
    let view = document.querySelector(".followBorder");
    let cursorView = document.querySelector("#idCursorView");
    let cursorReel = document.querySelector("#idCursorReel");
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            ponerCursorView("projectCursor");
            cursorView.classList.add("visible");
        });
        item.addEventListener("mouseleave", () => {
            quitarCursorView("projectCursor");
            cursorView.classList.remove("visible");
        });
    })
    let videoReel = document.querySelectorAll(".videoShowreel");
    videoReel.forEach((reel) => {
        reel.addEventListener("mouseenter", () => {
            ponerCursorView("reelCursor");
            cursorReel.classList.add("visible");
        });
        reel.addEventListener("mouseleave", () => {
            quitarCursorView("reelCursor");
            cursorReel.classList.remove("visible");
        });
    });
    window.addEventListener("mousemove", moverCursor);
    function moverCursor(event) {
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    }
    function ponerCursorView(estiloClass) {
        view.classList.add(estiloClass);
        view.classList.add("visible");
    }
    function quitarCursorView(estiloClass) {
        view.classList.remove(estiloClass);
        view.classList.remove("visible");

    }
    /*Fin cursor */
    /*ANImacion */
    const logoAnimado = document.getElementById("animacionLogo");
    const videoAnimado = document.getElementById("animacionVideo");
    const animacion = document.querySelector("#animacionInicio");
    let videoInicio = document.querySelector("#idVideoInicio");
    document.body.classList.add("scroll-blocked");

    let textoNos1 = document.querySelector("#idTextHeaderNos");

    setTimeout(function () {
        animacion.classList.add("finVideos");
        document.body.classList.remove("scroll-blocked");
        if (videoInicio !== null) {
            videoInicio.currentTime = 4;
            videoInicio.play();
        }
        if (textoNos1 !== null) {
            textoNos1.classList.remove("noneado");
            observarTextos();
        }
    }, 4000);

    setTimeout(function () {
        animacion.classList.add("finAnimacion");
    }, 5000);
    setTimeout(function () {
        logoAnimado.classList.add("finVideos");
        videoAnimado.classList.add("finVideos");
    }, 2000);
    /*FIN ANIMACION */

    let contCar = document.querySelector("#idContainerCarrousel");
    let containerCarrousel = document.getElementById('idCarrouselScroll');
    let sectionCarrousel = document.getElementById('idSectionCarrousel');

    let altCarrousel;
    if (sectionCarrousel !== null)
        calcularTamanio();

    function calcularTamanio() {
        //const tamCarrousel = contCar.scrollWidth;
        let tamCarrousel;
        if (window.innerWidth < 768)
            tamCarrousel = contCar.scrollWidth + window.innerHeight - (window.innerWidth * 25 / 100);
        else
            tamCarrousel = contCar.scrollWidth + window.innerHeight - (window.innerWidth * 50 / 100);


        altCarrousel = sectionCarrousel.getBoundingClientRect().top;

        let caja = document.querySelector("#idCajaCarrousel");
        caja.style.height = tamCarrousel + 'px';
    }


    window.addEventListener('scroll', animarScroll);
    //document.addEventListener('scroll', moverCursor);

    function animarScroll(event) {

        let seccion = document.querySelector("#idSectionTextScroll");
        if (seccion !== null) {
            let posicion = seccion.getBoundingClientRect().top;
            let tamanioP = window.innerHeight;
            let altura = posicion - tamanioP;
            if (altura < 0) {
                let textos = document.querySelectorAll(".scrollLines");
                let cant = 0;
                textos.forEach((texto) => {
                    if (cant % 2 === 0) {
                        texto.style.transform = 'translateX(' + altura / 3 + 'px)';
                    } else {
                        texto.style.transform = 'translateX(' + (-1) * altura / 3 + 'px)';
                    }
                    cant++;
                });
            }
        }

    }
    let ultimo = document.querySelector("#idCajaCarrousel");

    function isSectionVisible() {
        if (sectionCarrousel !== null) {
            var rect = sectionCarrousel.getBoundingClientRect();
            return (rect.top < 50 && (ultimo.getBoundingClientRect().bottom > window.innerHeight));
        } else {
            return false;
        }
    }

    function handleScroll() {
        if (isSectionVisible()) {
            containerCarrousel.style.transform = 'translateX(' + ((-1) * (window.scrollY - altCarrousel)) + 'px)';
        }
    }

    window.addEventListener('scroll', handleScroll);

    /*
        if (textoNos1 !== null)
            observarTextos();
    */

    const cargarTextos = (entradas, observador) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                if (entrada.target.id === "idTextHeaderNos" || entrada.target.id === "idSecondTextNos") {
                    let hijos = obtenerHijos(entrada.target);
                    hijos.forEach((hijo) => {
                        hijo.classList.add("textVisible");
                    });

                }
            }
        });
    }

    function observarTextos() {
        const observador = new IntersectionObserver(cargarTextos, {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: 0.25
        });
        let text2 = document.querySelector("#idSecondTextNos");
        observador.observe(textoNos1);
        observador.observe(text2);
    }

    function obtenerHijos(elemento) {
        let hijos = [];
        let arrHijos = elemento.childNodes;

        arrHijos.forEach((hijo) => {

            if (hijo.nodeName === 'DIV')
                hijos.push(hijo);
        });
        return hijos;
    }
});

