const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const sideMenu = document.getElementById('side-menu');

openMenuButton.addEventListener('click', function() {
    sideMenu.style.right = '0'; /* Изменили на right */
});

closeMenuButton.addEventListener('click', function(event) {
    event.stopPropagation();
    sideMenu.style.right = '-500px'; /* Изменили на right */
});

document.addEventListener('click', function(event) {
    if (event.target !== sideMenu && event.target !== openMenuButton) {
        sideMenu.style.right = '-500px'; /* Изменили на right */
    }
});