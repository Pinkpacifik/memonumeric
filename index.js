const menu = document.querySelector("nav");

menu.innerHTML = `
        <div class="nav-bloc">
            <a href="./index.html"><i class="fa-solid fa-house"></i></a>
        </div>
        <div class="nav-bloc">
            <a href="./page1.html"><i class="fa-solid fa-code"></i></a>
        </div>
        <div class="nav-bloc">
            <a href="./page2.html"><i class="fa-solid fa-server"></i></a>
        </div>
        <div class="nav-bloc">
            <a href="./page3.html"><i class="fa-brands fa-linux"></i></a>
        </div>
        <div class="nav-bloc">
            <a href="./page4.html"><i class="fa-brands fa-firefox"></i></a>
        </div>
        <div class="nav-bloc">
            <a href="./page5.html"><i class="fa-solid fa-bag-shopping"></i></a>
        </div>
        <div class="nav-bloc">
            <a href="./page6.html"><i class="fa-solid fa-box-archive"></i></a>
        </div>

        <div class="nav-brand">
            <div class="brand">
                <a href="mailto:pb@pro-etic.fr" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                <p class="tooltip">Contactez moi !</p>
            </div>
            <div class="brand">
                <a href="#" target="_blank"><i class="fa-brands fa-discord"></i></a>
                <p class="tooltip">Rejoignez moi !</p>
            </div>
        </div>
`;
