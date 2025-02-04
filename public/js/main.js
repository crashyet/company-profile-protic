// dropdown navbar
document.addEventListener("DOMContentLoaded", function () {
    // get elemen button and dropdown menu
    const dropdownBtn = document.getElementById('btn-divisi');
    const dropdownMenu = document.getElementById('divisi');

    // add event listener untuk klik tombol
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Mencegah event click menyebar ke document
      dropdownMenu.classList.toggle('hidden'); // Toggle menu
    });

    // Tutup dropdown jika klik di luar menu
    document.addEventListener('click', (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.add('hidden');
      }
    });
})
