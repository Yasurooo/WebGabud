// Array berisi beberapa quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Don’t count the days, make the days count. - Muhammad Ali"
];

// Fungsi untuk memilih quote secara acak
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Menampilkan quote yang dipilih secara acak ke dalam elemen dengan id "quote"
document.getElementById('quote').innerText = getRandomQuote();

// Event listener untuk navigasi
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".content");

    // Fungsi untuk menyembunyikan semua konten
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove("show");
        });
    }

    // Tambahkan event listener ke tiap tautan
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Mencegah navigasi default
            hideAllSections(); // Sembunyikan semua bagian

            // Tampilkan konten sesuai tautan
            const target = document.querySelector(link.getAttribute("href") + "-content");
            if (target) target.classList.add("show");
        });
    });

    // Tampilkan konten pertama secara default
    document.querySelector("#aboutme-content").classList.add("show");

    // Fungsi untuk menangani klik sosial media
    function handleSocialClick(url) {
        window.open(url, '_blank'); // Membuka link di tab baru
    }

    // Menambahkan event listener untuk GitHub
    document.getElementById('github-link').addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah navigasi default
        handleSocialClick('https://github.com/Yasurooo');
    });

    // Menambahkan event listener untuk Instagram
    document.getElementById('instagram-link').addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah navigasi default
        handleSocialClick('https://www.instagram.com/_vnz4u/profilecard/?igsh=cm80M3JpdTM4cXgy');
    });
});
