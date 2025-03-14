const hamburger = document.getElementById('hamburger')
const navbar = document.getElementById('menu-list')

hamburger.addEventListener('click', (e) => {
    // e.stopPropagation()
    navbar.classList.toggle('hidden')
})




const btnDivisi = document.getElementById('btn-divisi')
const menuDivisi = document.getElementById('menu-divisi')

btnDivisi.addEventListener('click', (e) => {
    menuDivisi.classList.toggle('hidden')
})

document.addEventListener('click', (e) => {
    if (!btnDivisi.contains(e.target) && !menuDivisi.contains(e.target)) {
        menuDivisi.classList.add('hidden')
    }

    // if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    //     navbar.classList.toggle('hidden')
    // }
})