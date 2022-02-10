

window.onload = function () {
    const menu_button = document.querySelector(".hamburger");
    const mob_menu = document.querySelector(".hamnav-link");
    const mob_menu1 = document.querySelectorAll(".hamnav-link1")

    menu_button.addEventListener('click', function () {
        menu_button.classList.toggle('is-active');
        mob_menu.classList.toggle('is-active');

    });
    mob_menu1.forEach(elem => {
        elem.addEventListener('click', function () {
            if (menu_button.classList.contains('is-active') & mob_menu.classList.contains('is-active')) {
                menu_button.classList.toggle('is-active');
                mob_menu.classList.toggle('is-active');
            }
        });
    })

}

