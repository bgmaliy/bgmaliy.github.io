document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");

        // Hamburger ikonunu animasiya edək
        if (nav.classList.contains("active")) {
            menuToggle.innerHTML = "✖"; // Açıq olanda "X" ikonu göstər
        } else {
            menuToggle.innerHTML = "☰"; // Bağlı olanda 3 xətt göstər
        }
    });

    // Menyu linkinə klik ediləndə menyunu bağlayaq
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
            menuToggle.innerHTML = "☰"; // Yenidən 3 xətt göstər
        });
    });

    // Smooth scrolling effekti əlavə edək
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
