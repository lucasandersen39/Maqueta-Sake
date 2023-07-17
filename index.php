<?php
define("BASE_URL", 'http://' . $_SERVER['SERVER_NAME'] . dirname($_SERVER['PHP_SELF']));


$query = (!empty($_GET['q'])) ? $_GET['q'] : 'home';
$accesos = explode("/", $query);

$base = "/";
$cssFiles = array();
$jsFiles = array();
$jsToExecute = '';

$headerFile = "templates/header.php";
$footerFile = "templates/footer.php";

$titlepage = "Sake";
switch ($accesos[0]) {
    case "home":
        $file = "templates/home.php";
        $jsFiles[] = "js/sake.js";
        break;
    case "Nosotros":
        $file = "templates/nosotros.php";
        $jsFiles[] = "js/sake.js";
        break;
    case "Trabajos":
        $file = "templates/trabajos.php";
        $jsFiles[] = "js/trabajos.js";
        break;

    default:
        header("HTTP/1.0 404 Not Found");
        $file = "templates/error404.php";
}
@header('Content-Type: text/html; charset=utf-8');

include $headerFile;
include $file;
include $footerFile;
