//GSAP ANIMATIONS
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
//Scrolltrigger
import ScrollTrigger from 'gsap/ScrollTrigger';

//TEST
window.addEventListener("DOMContentLoaded", () => {

    console.log("MAIN OK");

    const hero = (document.querySelector(".hero-title"));
    console.log(hero);


    gsap.from(hero, {
        opacity: 0,
        y: 30,
        duration: 0.8
    });
});


// Tailwind CSS entry point
import './input.css';

// Mobile menu functionality
window.addEventListener("DOMContentLoaded", () => {
    console.log("MAIN OK");

    const btn = document.querySelector("#mobile-menu-btn");
    const menu = document.querySelector("#mobile-menu");

    if (!btn || !menu) return;

    let open = false;

    btn.addEventListener("click", () => {
        open = !open;

        if (open) {
            gsap.to(menu, {
                opacity: 1,
                y: 10,
                pointerEvents: "auto",
                duration: 0.4,
                ease: "power3.out"
            });
        } else {
            gsap.to(menu, {
                opacity: 0,
                y: -10,
                pointerEvents: "none",
                duration: 0.25
            });
        }
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Risoluzione errore di scope: selezioniamo il menu mobile attivo
        const menu = document.querySelector("#mobile-menu");
        if (menu) {
            // Chiude il menu coerentemente tramite GSAP senza rompere i flussi
            gsap.to(menu, {
                opacity: 0,
                y: -10,
                pointerEvents: "none",
                duration: 0.25
            });
        }

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

