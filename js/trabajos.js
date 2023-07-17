"uses strict"

document.addEventListener("DOMContentLoaded", () => {

    const logoAnimado = document.getElementById("animacionLogo");
    const videoAnimado = document.getElementById("animacionVideo");
    const animacion = document.querySelector("#animacionInicio");

    setTimeout(function () {
        animacion.classList.add("finVideos");
        document.body.classList.remove("scroll-blocked");
    }, 4000);

    setTimeout(function () {
        animacion.classList.add("finAnimacion");
    }, 5000);
    setTimeout(function () {
        logoAnimado.classList.add("finVideos");
        videoAnimado.classList.add("finVideos");
    }, 2000);

    document.querySelector("#idCursor").classList.add("noneado");
    let idelemento = -1;
    if (window.innerWidth > 768) {
        let trabajos = document.querySelector("#idSectionTrabajos");
        let hijosTrabajos = obtenerHijos(trabajos, 'DIV');
        hijosTrabajos.forEach((hijos) => {
            let links = obtenerHijos(hijos, "A");
            insertarEventoMouseEntra(links);
        });
    }

    function insertarEventoMouseEntra(elemento) {
        elemento.forEach((link) => {
            link.addEventListener("mouseenter", (event) => {
                let imagen = obtenerImagen(".imagenTrabajo-" + event.target.id);
                link.childNodes[1].childNodes[1].classList.add("visible");
                imagen.classList.add("visible");
                idelemento = event.target.id;
            });
            link.addEventListener("mouseleave", () => {
                let imagen = obtenerImagen(".imagenTrabajo-" + event.target.id);
                imagen.classList.remove("visible");
                link.childNodes[1].childNodes[1].classList.remove("visible");
                idelemento = -1;
            });
        })
    }
    let cursor = document.querySelector("#idCursorTrabajo");
    window.addEventListener("mousemove", moverCursor);
    function moverCursor(event) {
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
    }

    function obtenerImagen(clase) {
        return document.querySelector(clase);
    }

    function obtenerHijos(elemento, tagHijo) {
        let hijos = [];
        let arrHijos = elemento.childNodes;
        arrHijos.forEach((hijo) => {
            if (hijo.nodeName === tagHijo)
                hijos.push(hijo);
        });
        return hijos;
    }
    /*
        let divsTrabajo = document.querySelectorAll(".divTrabajo");
        divsTrabajo.forEach((divT) => {
            console.log(divT.childNodes[1]);
            divT.childNodes[1].addEventListener("click", (event) => {
                event.stopPropagation();
                abrirModal(event);
            });
        });
    
        function abrirModal(event) {
            event.preventDefault();
            console.log(event.target);
            let modal = document.querySelector("#idModal");
            // modal.classList.add("visible");
            // document.body.classList.add("scroll-blocked");
        }*/
});