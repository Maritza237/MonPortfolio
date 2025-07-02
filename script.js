document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navUl = document.querySelector('nav ul');

    if (burger && navUl) {
        burger.addEventListener('click', function () {
            navUl.classList.toggle('open');
        });

        // Optionnel : referme le menu quand on clique sur un lien
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('open');
            });
        });
    }
});