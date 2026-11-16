// Mengambil elemen tombol berdasarkan ID
const sapaButton = document.getElementById('SapaButton');

// Menambahkan fungsi klik pada tombol
sapaButton.addEventListener('click', function() {
    // 1. Memunculkan pesan pop-up sambutan
    alert('Halo! Terima kasih sudah berkunjung ke Little Universe milik Rossa. Semoga harimu menyenangkan! ✨🚀');
    
    // 2. Mengubah teks tombol secara dinamis setelah diklik
    sapaButton.textContent = 'Terima Kasih! ❤️';
    
    // 3. Mengembalikan teks tombol ke semula setelah 3 detik
    setTimeout(function() {
        sapaButton.textContent = 'Sapa saya!';
    }, 3000);
});
