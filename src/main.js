// ─────────────────────────────────────────────────────────────
// GSAP + ScrollTrigger
// ─────────────────────────────────────────────────────────────
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Tailwind CSS entry point
import './input.css';

// ─────────────────────────────────────────────────────────────
// DOM READY
// ─────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  console.log('MAIN OK');

  // ── Hero entrance ──────────────────────────────────────────
  const heroTitle = document.querySelector('.hero-title');
  const heroSub = document.querySelector('.hero-sub');

  if (heroTitle) {
    gsap.from(heroTitle, {
      opacity: 0,
      y: 40,
      duration: 1.0,
      ease: 'power3.out',
      delay: 0.1,
    });
  }
  if (heroSub) {
    gsap.to(heroSub, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power2.out',
      delay: 0.45,
    });
  }

  // ── Mobile menu setup ──────────────────────────────────────
  const btn = document.querySelector('#mobile-menu-btn');
  const menu = document.querySelector('#mobile-menu');
  const overlay = document.querySelector('#menu-overlay');
  const menuIcon = btn ? btn.querySelector('.material-symbols-outlined') : null;

  if (!btn || !menu) return;

  // Raccoglie i link dentro il menu
  const menuLinks = menu.querySelectorAll('a');

  // Stato iniziale dei link (fuori schermo in alto, invisibili)
  gsap.set(menuLinks, { opacity: 0, y: 15 });

  // Stato iniziale menu
  gsap.set(menu, {
    opacity: 0,
    scaleY: 0.96,
    transformOrigin: 'top center',
    pointerEvents: 'none',
    display: 'block',
  });

  let isOpen = false;
  let menuTl = null; // timeline corrente

  // ── Open ───────────────────────────────────────────────────
  const openMenu = () => {
    if (isOpen) return;
    isOpen = true;

    // Blocca scroll + pointer-events su main
    document.body.style.overflow = 'hidden';
    document.body.classList.add('menu-open');

    // Aggiorna icona
    if (menuIcon) menuIcon.textContent = 'close';

    // Attiva overlay
    if (overlay) {
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        pointerEvents: 'auto',
        display: 'block',
      });
    }

    // Animazione tendina
    if (menuTl) menuTl.kill();
    menuTl = gsap.timeline();

    menuTl
      .to(menu, {
        opacity: 1,
        scaleY: 1,
        pointerEvents: 'auto',
        duration: 1.2,
        ease: 'expo.out',
      })
      .to(
        menuLinks,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.09,
        },
        '-=0.75' // sovrappone all'apertura del container
      );
  };

  // ── Close ──────────────────────────────────────────────────
  const closeMenu = () => {
    if (!isOpen) return;
    isOpen = false;

    // Ripristina scroll + pointer-events su main
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');

    // Aggiorna icona
    if (menuIcon) menuIcon.textContent = 'menu_open';

    // Disattiva overlay
    if (overlay) {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        pointerEvents: 'none',
      });
    }

    // Reverse: link escono prima, poi container si chiude
    if (menuTl) menuTl.kill();
    menuTl = gsap.timeline();

    menuTl
      .to(menuLinks, {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: 'power2.inOut',
        stagger: { each: 0.06, from: 'end' },
      })
      .to(
        menu,
        {
          opacity: 0,
          scaleY: 0.96,
          pointerEvents: 'none',
          duration: 0.55,
          ease: 'power3.inOut',
        },
        '-=0.15'
      );
  };

  // ── Event listeners ────────────────────────────────────────
  btn.addEventListener('click', () => (isOpen ? closeMenu() : openMenu()));

  // Click overlay chiude menu
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Click link del menu → chiudi menu
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // ── Smooth scroll per anchor links (index) ─────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        closeMenu();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    });
  });
});

// ─────────────────────────────────────────────────────────────
// SMOOTH SCROLL — js-scroll class
// ─────────────────────────────────────────────────────────────
document.querySelectorAll('.js-scroll').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    gsap.to(window, {
      duration: 0.9,
      scrollTo: { y: target, offsetY: 80 },
      ease: 'power3.inOut',
    });
  });
});

// ─────────────────────────────────────────────────────────────
// SCROLL REVEAL — GSAP ScrollTrigger BIDIREZIONALE
// Sostituisce il vecchio sistema CSS .reveal
// ─────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // ── Sezioni .reveal (container) ───────────────────────────
  document.querySelectorAll('.reveal').forEach((el) => {
    // Rimuoviamo le classi CSS legacy che potrebbero fare conflitto
    el.classList.remove('active');

    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // ── Text reveal: titoli, paragrafi, span eyebrow ──────────
  const textRevealSelectors = [
    'section h2',
    'section h3',
    'section p',
    'section .card',
    'section > div > span',
    '.hero-sub',
  ];

  textRevealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      // Salta elementi già dentro .reveal (animati sopra) o nella hero
      if (
        el.closest('.hero-title') ||
        el.classList.contains('hero-title') ||
        el.closest('[data-no-reveal]')
      )
        return;

      // Check se è dentro un .reveal già animato
      if (el.closest('.reveal') && el.closest('.reveal') !== el) {
        // Animazione leggera per elementi figli delle sezioni .reveal
        gsap.fromTo(
          el,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            delay: 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 10%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  });

  // ── Cards stagger nelle sezioni ───────────────────────────
  document.querySelectorAll('.card').forEach((card, i) => {
    // Raggruppiamo per contenitore per calcolare un indice stagger locale ed evitare delay spropositati
    const parent = card.parentElement;
    const siblings = parent ? Array.from(parent.querySelectorAll('.card')) : [];
    const localIndex = siblings.indexOf(card) >= 0 ? siblings.indexOf(card) : i;

    gsap.fromTo(
      card,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: localIndex * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // ── Fade-in-section (dintorni page) ───────────────────────
  document.querySelectorAll('.fade-in-section').forEach((el) => {
    el.classList.remove('is-visible');

    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // ── Testimonial Slider logic ──────────────────────────────
  const testimonialSection = document.querySelector('#testimonials-section');
  if (testimonialSection) {
    const slides = testimonialSection.querySelectorAll('.testimonial-slide');
    const prevBtn = testimonialSection.querySelector('#prev-testimonial');
    const nextBtn = testimonialSection.querySelector('#next-testimonial');
    let currentIdx = 0;
    let isTransitioning = false;

    const showTestimonial = (nextIdx, direction) => {
      if (isTransitioning || nextIdx === currentIdx) return;
      isTransitioning = true;

      const currentSlide = slides[currentIdx];
      const nextSlide = slides[nextIdx];

      const xOffset = direction === 'next' ? 60 : -60;

      // Animazione uscita slide corrente
      gsap.to(currentSlide, {
        opacity: 0,
        x: -xOffset,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          currentSlide.classList.remove('opacity-100', 'z-10');
          currentSlide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
          gsap.set(currentSlide, { x: 0 }); // reset
        }
      });

      // Prepariamo la slide successiva
      nextSlide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      nextSlide.classList.add('opacity-100', 'z-10');
      gsap.set(nextSlide, { x: xOffset, opacity: 0 });

      // Animazione entrata slide successiva
      gsap.to(nextSlide, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.1,
        onComplete: () => {
          currentIdx = nextIdx;
          isTransitioning = false;
        }
      });
    };

    prevBtn?.addEventListener('click', () => {
      const nextIdx = (currentIdx - 1 + slides.length) % slides.length;
      showTestimonial(nextIdx, 'prev');
    });

    nextBtn?.addEventListener('click', () => {
      const nextIdx = (currentIdx + 1) % slides.length;
      showTestimonial(nextIdx, 'next');
    });
  }

  // ── Lightbox Gallery logic ────────────────────────────────
  const gallerySection = document.querySelector('#gallery');
  const lightbox = document.querySelector('#gallery-lightbox');
  if (gallerySection && lightbox) {
    const images = Array.from(gallerySection.querySelectorAll('img.img-hover'));
    const lightboxImg = lightbox.querySelector('#lightbox-img');
    const lightboxCounter = lightbox.querySelector('#lightbox-counter');
    const lightboxCaption = lightbox.querySelector('#lightbox-caption');
    const closeBtn = lightbox.querySelector('#close-lightbox');
    const prevBtn = lightbox.querySelector('#prev-lightbox');
    const nextBtn = lightbox.querySelector('#next-lightbox');
    let activeImgIdx = 0;

    const updateLightboxImage = (index) => {
      if (index < 0 || index >= images.length) return;
      activeImgIdx = index;
      const targetImg = images[index];

      // Anima fuori l'immagine corrente
      gsap.to(lightboxImg, {
        opacity: 0,
        scale: 0.95,
        duration: 0.25,
        ease: 'power2.inOut',
        onComplete: () => {
          lightboxImg.src = targetImg.src;
          lightboxImg.alt = targetImg.alt;
          lightboxCounter.textContent = `${activeImgIdx + 1} / ${images.length}`;
          lightboxCaption.textContent = targetImg.alt || '';

          // Anima dentro la nuova immagine
          gsap.to(lightboxImg, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    };

    // Apri lightbox
    images.forEach((img, idx) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        activeImgIdx = idx;
        lightbox.classList.remove('pointer-events-none');
        
        // Visualizza lightbox
        gsap.to(lightbox, {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => {
            // Blocca scroll body
            document.body.style.overflow = 'hidden';
          }
        });

        // Carica immagine direttamente senza animazione per il primo render
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCounter.textContent = `${activeImgIdx + 1} / ${images.length}`;
        lightboxCaption.textContent = img.alt || '';
        
        gsap.set(lightboxImg, { opacity: 0, scale: 0.95 });
        gsap.to(lightboxImg, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.1
        });
      });
    });

    // Chiudi lightbox
    const closeLightbox = () => {
      document.body.style.overflow = '';
      gsap.to(lightbox, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          lightbox.classList.add('pointer-events-none');
          lightboxImg.src = '';
        }
      });
    };

    closeBtn?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('flex-grow') || (e.target.closest('.flex-grow') && !e.target.closest('#lightbox-img') && !e.target.closest('button'))) {
        closeLightbox();
      }
    });

    // Naviga precedente/successiva
    const showPrev = () => {
      const newIdx = (activeImgIdx - 1 + images.length) % images.length;
      updateLightboxImage(newIdx);
    };

    const showNext = () => {
      const newIdx = (activeImgIdx + 1) % images.length;
      updateLightboxImage(newIdx);
    };

    prevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrev();
    });
    nextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      showNext();
    });

    // Tastiera
    document.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('pointer-events-none')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }
});

// ─────────────────────────────────────────────────────────────
// LEGACY reveal() — mantenuto per compatibilità (no-op adesso)
// ScrollTrigger gestisce tutto
// ─────────────────────────────────────────────────────────────
function reveal() {
  // delegato a ScrollTrigger
}
window.addEventListener('scroll', reveal);
reveal();
