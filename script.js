document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formTransaksi');
    if (form) {
        form.addEventListener('submit', (e) => {
            const nama = document.getElementById('nama').value.trim();
            const jumlah = document.getElementById('jumlah').value.trim();
            
            if (!nama || !jumlah) {
                alert('Semua field harus diisi!');
                e.preventDefault();
            }
        });
    }

    const links = document.querySelectorAll('nav ul li a');
    const currentLocation = window.location.href;

    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }

        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.product-grid button');
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    alert('Produk berhasil ditambahkan ke keranjang!');
                });
            });
        });
    });
});