// Tailwind CSS entry point
import './input.css';

// Mobile menu functionality
const sideNav = document.getElementById('side-nav');
const openBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');

if (openBtn && closeBtn && sideNav) {
    openBtn.addEventListener('click', () => {
        sideNav.classList.remove('-translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.add('-translate-x-full');
    });
}

// Reveal animation on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (sideNav) {
            sideNav.classList.add('-translate-x-full');
        }
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
