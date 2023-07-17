<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>/css/sake.css">
    <title>Document</title>
</head>

<body>

    <div class="follow" id="idCursor">
        <div class="followBorder">
            <div class="owlHoverCursor">
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                    <path d="M8.5 4.5l-3 3 3 3" stroke="currentColor" stroke-linecap="square"></path>
                </svg>
                <span></span>
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                    <path d="M6.5 10.5l3-3-3-3" stroke="currentColor" stroke-linecap="square"></path>
                </svg>
            </div>
            <div class="projectCursor" id="idCursorView">
                <span>View</span>
            </div>
            <div class="reelCursor" id="idCursorReel">
                <span>Play</span>
            </div>
        </div>
    </div>
    <div id="animacionInicio" class="animacionInicio">
        <video id="animacionLogo" class="animacionLogo" src="video/logoSake.mp4" muted autoplay loop></video>
        <video id="animacionVideo" class="videoAnimacion" src="video/animation_3.mp4" muted autoplay loop></video>
    </div>
    <div class="follow followTrabajo" id="idCursorTrabajo">
        <img src="<?php echo BASE_URL; ?>/img/gif1.gif" alt="" class="imagenTrabajo-1">
        <img src="<?php echo BASE_URL; ?>/img/gif2.gif" alt="" class="imagenTrabajo-2">
    </div>
    <header>
        <nav class="navbar fixed-top menuNavBar">
            <div class="container-fluid">
                <a class="navbar-brand linkLogoNav" href="<?php echo BASE_URL; ?>/home"> <img src="img/logo-Sake.png" class="img-fluid" alt="Logo de Sake">
                </a>
                <button class="navbar-toggler burgermenu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon">
                    </span>
                </button>
                <div class="offcanvas offcanvas-end menuCanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header headerCanvas">
                        <!--  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Sake</h5>-->
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ulOffcanvas">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="<?php echo BASE_URL; ?>/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="<?php echo BASE_URL; ?>/Trabajos">Trabajos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="<?php echo BASE_URL; ?>/Nosotros">Nosotros</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    </header>