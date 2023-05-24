const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
    <div class="logo">
        <img src="./nombreblanco.png" alt="logo blanco" class="imgLogo">
    </div>
    <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <nav class="nav-bar">
        <ul>
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./nosotros.html">Nosotros</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
            <li><a href="./formdonar.html" class="donate-link">Login</a></li>
        </ul>
    </nav>
    <script src="script.js"></script>
`;

footer.innerHTML = `
    <p>Derechos de autor © 2023</p>
    <ul class="social-icons">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
    </ul>
`;

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
         navBar = document.querySelector(".nav-bar");
         navBar.classList.toggle("active");
     }