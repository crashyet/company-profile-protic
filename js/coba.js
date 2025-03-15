document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger')
    const menuList = document.getElementById('menu-list')
    const btnDivisi = document.getElementById('btn-divisi')
    const menuDivisi = document.getElementById('menu-divisi')

    const arrow = document.getElementById('arrow')
    const overlay = document.getElementById('overlay')


    hamburger.addEventListener('click', (e) => {
        e.stopPropagation()
        // menuList.classList.toggle('hidden')

        if (menuList.classList.contains('hidden')) {
            menuList.classList.remove('hidden')
            overlay.style.display = 'block'
        } else {
            menuList.classList.add('hidden')
            overlay.style.display = 'none'
        }
    })


    btnDivisi.addEventListener('click', (e) => {
        e.stopPropagation()
        // menuDivisi.classList.toggle('hidden')

        if (menuDivisi.classList.contains('hidden')) {
            menuDivisi.classList.remove('hidden')
            arrow.classList.add('rotate-arrow')
        } else {
            menuDivisi.classList.add('hidden')
            arrow.classList.remove('rotate-arrow')
        }
    })

    menuList.addEventListener('click', (e) => {
        e.stopPropagation()
    })

    // menuDivisi.addEventListener('click', (e) => {
    //     e.stopPropagation()
    // })




    document.addEventListener('click', (e) => {
        if (!btnDivisi.contains(e.target) && !menuDivisi.contains(e.target)) {
            menuDivisi.classList.add('hidden')
        }

        // if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        //     // navbar.classList.toggle('hidden')
        //     closeMenu()
        // }
        closeMenu()
    })



    function closeMenu() {
        menuList.classList.add('hidden')
        overlay.style.display = 'none'

        if (!menuDivisi.classList.contains('hidden')) {
            menuDivisi.classList.add('hidden')
            arrow.classList.remove('rotate-arrow')
        }
    }


})