//GSAP ANIMATIONS
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Tailwind CSS entry point
import './input.css';

// TEST & Mobile menu functionality
window.addEventListener("DOMContentLoaded", () => {
    console.log("MAIN OK");

    const hero = document.querySelector(".hero-title");
    if (hero) {
        gsap.from(hero, {
            opacity: 0,
            y: 30,
            duration: 0.8
        });
    }

    const btn = document.querySelector("#mobile-menu-btn");
    const menu = document.querySelector("#mobile-menu");

    if (!btn || !menu) return;

    let open = false;

    const openMenu = () => {
        open = true;
        gsap.to(menu, {
            opacity: 1,
            y: 0,
            pointerEvents: "auto",
            duration: 0.55,
            ease: "power3.out"
        });
    };

    const closeMenu = () => {
        open = false;
        gsap.to(menu, {
            opacity: 0,
            y: -15,
            pointerEvents: "none",
            duration: 0.35,
            ease: "power2.inOut"
        });
    };

    btn.addEventListener("click", () => {
        if (open) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (open) {
                closeMenu();
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

//mobile menu landing
document.querySelectorAll('.js-scroll').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        gsap.to(window, {
            duration: 0.9,
            scrollTo: {
                y: target,
                offsetY: 80 // utile se hai header fisso
            },
            ease: "power3.inOut"
        });
    });
});

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


