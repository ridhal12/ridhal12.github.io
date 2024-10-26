// Toggle 'Tampilkan Lebih Banyak' pada bagian pengalaman
document.getElementById("toggleExperience").addEventListener("click", function() {
    const moreExperience = document.getElementById("moreExperience");
    if (moreExperience.style.display === "none") {
        moreExperience.style.display = "block";
        this.textContent = "Sembunyikan";
    } else {
        moreExperience.style.display = "none";
        this.textContent = "Tampilkan Lebih Banyak";
    }
});

// Validasi sederhana pada form kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNumber").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]+$/;

    if (!email.match(emailPattern)) {
        alert("Format email tidak valid!");
        event.preventDefault();
    } else if (!phone.match(phonePattern)) {
        alert("Nomor telepon hanya boleh berisi angka!");
        event.preventDefault();
    }
});

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
