document.addEventListener("DOMContentLoaded", function () {
    // CONTROLE DO MENU MOBILE
    const mobileAction = document.querySelector('.mobile_action');
    const mainHeaderNav = document.querySelector('.main_header_nav');

    mobileAction.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            mainHeaderNav.style.left = '0px';
        } else {
            this.classList.remove('active');
            mainHeaderNav.style.left = '-100%';
        }
    });

    // HEADER FIXO AO SCROLL
    const mainHeader = document.querySelector('.main_header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            mainHeader.classList.add('fixed');
        } else {
            mainHeader.classList.remove('fixed');
        }
    });

    // SCROLL SUAVE PARA ÂNCORAS
    const scrollLinks = document.querySelectorAll('.scrollSuave');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offset = targetElement.offsetTop - 100;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });

    // MENU ATIVO
    const links = document.querySelectorAll('#top a');
    window.addEventListener('scroll', function () {
        const topScroll = window.scrollY;
        links.forEach(link => {
            const href = link.getAttribute('href');
            const section = document.querySelector(href);
            const sectionTop = section.offsetTop - 101;
            const sectionHeight = section.offsetHeight;

            if (topScroll >= sectionTop && topScroll < sectionTop + sectionHeight) {
                links.forEach(l => l.classList.remove('menuAtivo'));
                link.classList.add('menuAtivo');
            } else {
                link.classList.remove('menuAtivo');
            }
        });
    });

    // MAGNIFIC POPUP (Substituído por Lightbox Simples)
    const galleryLinks = document.querySelectorAll('.galeria a');
    galleryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('href');
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${imageSrc}" alt="Imagem da Galeria">
                    <button class="lightbox-close" aria-label="Fechar">×</button>
                </div>
            `;
            document.body.appendChild(lightbox);

            const closeButton = lightbox.querySelector('.lightbox-close');
            closeButton.addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    document.body.removeChild(lightbox);
                }
            });
        });
    });
});