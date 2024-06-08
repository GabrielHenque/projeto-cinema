// funções que são executadas ao carregar a pagina
document.addEventListener("DOMContentLoaded", () => {
    menu = document.getElementById('menu')

    menu.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="img/logo.png" class="logo-topo" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="cantainer-menu offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                        <a href="index.html" class="btn btn-home mb-2">Home</a>

                        <a href="codigo.html" class="btn btn-comentarios mb-2">Comentários</a>

                        <a href="ranking.html" class="btn btn-ranking mb-2">Ranking</a>

                        <a href="ods.html" class="btn btn-ods mb-2">ODs</a>

                        <a href="orientacao.html" class="btn btn-agenda mb-2">Agenda</a>



                        <div class="btn-group">
                            <button class="btn btn-periodo" type="button" aria-haspopup="true" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Períodos
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="projetos.html?periodo=manha">Manhã</a></li>
                                <li><a class="dropdown-item" href="projetos.html?periodo=tarde">Tarde</a></li>
                                <li><a class="dropdown-item" href="projetos.html?periodo=noite">Noite</a></li>

                            </ul>
                        </div>
                </div>

                <footer id="footer-menu">
                    <div>
                        <div ontouchstart="">
                            <div class="button margin-top mb-4">
                                <a href="creditos.html">Desenvolvedores</a>
                            </div>
                        </div>
                    </div>
                </footer>

            </ul>

        </div>
                    </div >

   `                 

});