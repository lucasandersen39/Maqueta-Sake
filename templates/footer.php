<footer class="row gx-0">
    <div class="col-md-4">
        <img src="img/logo-Sake.png" class="img-fluid imgLogoFooter" alt="">
    </div>
    <div class="col-md-4 direcciones">
        <div>
            <p>Ausias Marc 130</p>
            <p>barcelona@wearesake.com</p>
        </div>
        <div>
            <p>Pelayo 52</p>
            <p>madrid@wearesake.com</p>
        </div>
        <div>
            <p>Dir Elías</p>
            <p>london@wearesake.com</p>
        </div>
        <div>
            <p>Cnel. Niceto Vega 4644</p>
            <p>buenosaires@wearesake.com</p>
        </div>
    </div>
    </div>
    <div class="col-md-4 redes">
        <a href="#"><img src="img/icono-Instagram.png" alt="Icono Instagram"></a>
        <a href="#"><img src="img/icono-vimeo.png" alt="Icono Vimeo"></a>
        <a href="#"><img src="img/icono-linkedin.png" alt="Icono Linkedin"></a>

    </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<?php
foreach ($jsFiles as $js) { ?>
    <script src="<?= BASE_URL . "/" . $js ?>"></script>
<?php
}
?>
</body>

</html>