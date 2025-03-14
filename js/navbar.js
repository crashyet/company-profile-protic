const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menuList.classList.toggle("hidden");
});