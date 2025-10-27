// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initializeAnimations();
    handlePhoneInteraction();
    initScrollAnimations();
    handleNavigation();
    setupPhoneToggle();
});

// Initialize message animations on page load
function initializeAnimations() {
    const leftSlideElements = document.querySelectorAll('.slide-in-left');
    const rightSlideElements = document.querySelectorAll('.slide-in-right');
    const allAnimatedElements = [...leftSlideElements, ...rightSlideElements];

    // Also handle resource cards
    const resourceCards = document.querySelectorAll('.resource-card');
    allAnimatedElements.push(...resourceCards);

    // Reset animations on page load/refresh
    allAnimatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.animation = 'none';

        // Force browser to recalculate styles
        element.offsetHeight;

        // Reapply animation
        element.style.animation = null;
    });

    // Trigger animations with proper delays
    setTimeout(() => {
        allAnimatedElements.forEach((element, index) => {
            const delay = parseFloat(element.style.animationDelay || '0s');
            setTimeout(() => {
                element.style.opacity = '1';
            }, delay * 1000);
        });
    }, 100);
}

// Placeholder for future phone interactions
function handlePhoneInteraction() {
    // Phone flipping functionality has been removed
    // This function is kept for potential future interactions
}

// Phone toggle animation system
let currentPhone = 1;
let isAnimating = false;

function setupPhoneToggle() {
    const overlay = document.getElementById('hover-overlay');
    const phoneOne = document.getElementById('phone-one');
    const phoneTwo = document.getElementById('phone-two');

    // Click handler for overlay
    if (overlay) {
        overlay.addEventListener('click', togglePhones);
    }

    // Click handlers for phones
    if (phoneOne) {
        phoneOne.addEventListener('click', togglePhones);
    }

    if (phoneTwo) {
        phoneTwo.addEventListener('click', togglePhones);
    }
}

function togglePhones() {
    if (isAnimating) return;
    isAnimating = true;

    const phoneOne = document.getElementById('phone-one');
    const phoneTwo = document.getElementById('phone-two');
    const overlay = document.getElementById('hover-overlay');

    // Hide overlay during transition
    if (overlay) {
        overlay.style.display = 'none';
    }

    if (currentPhone === 1) {
        // Animate phone 1 elements out
        animatePhoneOut(phoneOne);

        // After slide-out animation, switch phones
        setTimeout(() => {
            phoneOne.style.display = 'none';
            phoneTwo.style.display = 'flex';

            // Reset and trigger animations for phone 2
            resetAnimations(phoneTwo);
            setTimeout(() => {
                animatePhoneIn(phoneTwo);
                currentPhone = 2;
                isAnimating = false;
            }, 100);
        }, 600);
    } else {
        // Animate phone 2 elements out
        animatePhoneOut(phoneTwo);

        // After slide-out animation, switch phones
        setTimeout(() => {
            phoneTwo.style.display = 'none';
            phoneOne.style.display = 'flex';

            // Reset and trigger animations for phone 1
            resetAnimations(phoneOne);
            setTimeout(() => {
                animatePhoneIn(phoneOne);
                currentPhone = 1;
                isAnimating = false;
            }, 100);
        }, 600);
    }
}

function animatePhoneOut(phoneElement) {
    const leftElements = phoneElement.querySelectorAll('.slide-in-left');
    const rightElements = phoneElement.querySelectorAll('.slide-in-right');

    // Animate elements out in reverse direction
    leftElements.forEach((el, index) => {
        el.style.animation = `slideOutToLeft 0.5s ease-in forwards`;
        el.style.animationDelay = `${index * 0.1}s`;
    });

    rightElements.forEach((el, index) => {
        el.style.animation = `slideOutToRight 0.5s ease-in forwards`;
        el.style.animationDelay = `${index * 0.1}s`;
    });
}

function resetAnimations(phoneElement) {
    const allAnimatedElements = phoneElement.querySelectorAll('.slide-in-left, .slide-in-right, .resource-card');

    allAnimatedElements.forEach(element => {
        element.style.animation = 'none';
        element.style.opacity = '0';
        // Force browser to recalculate styles
        element.offsetHeight;
    });
}

function animatePhoneIn(phoneElement) {
    const leftElements = phoneElement.querySelectorAll('.slide-in-left');
    const rightElements = phoneElement.querySelectorAll('.slide-in-right');
    const resourceCards = phoneElement.querySelectorAll('.resource-card');

    // Apply slide-in animations with delays
    leftElements.forEach((el, index) => {
        const originalDelay = el.getAttribute('data-delay') || `${0.5 + index * 0.5}s`;
        el.style.animation = `slideInFromLeft 0.6s ease-out forwards`;
        el.style.animationDelay = originalDelay;
    });

    rightElements.forEach((el, index) => {
        const originalDelay = el.getAttribute('data-delay') || `${0.5 + index * 0.5}s`;
        el.style.animation = `slideInFromRight 0.6s ease-out forwards`;
        el.style.animationDelay = originalDelay;
    });

    resourceCards.forEach((el, index) => {
        if (el.classList.contains('slide-in-left')) {
            const originalDelay = el.getAttribute('data-delay') || `${2 + index * 0.5}s`;
            el.style.animation = `slideInFromLeft 0.6s ease-out forwards`;
            el.style.animationDelay = originalDelay;
        } else if (el.classList.contains('slide-in-right')) {
            const originalDelay = el.getAttribute('data-delay') || `${2 + index * 0.5}s`;
            el.style.animation = `slideInFromRight 0.6s ease-out forwards`;
            el.style.animationDelay = originalDelay;
        }
    });
}

// Scroll-based animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.stat-item, .cta-button, .description, .main-quote');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease-out';
        observer.observe(element);
    });
}

// Add animate-in class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Check if it's an internal link
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // If section doesn't exist, scroll to top
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Add parallax effect to phone on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const phoneContainer = document.querySelector('.phone-container');

    if (phoneContainer) {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        phoneContainer.style.transform = `translateY(${yPos}px)`;
    }
});

// Refresh animations when tab becomes visible again
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        initializeAnimations();
    }
});

// Add hover effects to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // Add ripple effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);

        // Here you can add logic to open iMessage or redirect to app
        console.log('Opening Franklink in iMessage...');
        // window.location.href = 'sms:&body=Hi%20Franklink!';
    });
}

// Easter egg: Konami code for fun animation
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        triggerEasterEgg();
    }
});

function triggerEasterEgg() {
    const phoneWrapper = document.querySelector('.phone-wrapper');
    phoneWrapper.style.animation = 'spin 1s ease-in-out';

    setTimeout(() => {
        phoneWrapper.style.animation = '';
    }, 1000);
}

// Add spin animation
const spinStyle = document.createElement('style');
spinStyle.textContent = `
    @keyframes spin {
        0% { transform: rotateY(0deg) scale(1); }
        50% { transform: rotateY(180deg) scale(1.1); }
        100% { transform: rotateY(360deg) scale(1); }
    }
`;
document.head.appendChild(spinStyle);