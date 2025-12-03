document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Modal Logic
    const modal = document.getElementById("myModal");
    const img = document.querySelector(".responsive-img");
    const modalImg = document.getElementById("img01");
    const span = document.getElementsByClassName("close")[0];

    if (img) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }

    if (span) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    // Close on click outside
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
