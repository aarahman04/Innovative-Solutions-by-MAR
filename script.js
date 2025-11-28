document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks  = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // 🔹 NEW: navbar + scroll state
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;


    // Close mobile menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for sticky header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

    //  Back to Top Button but nav bar goes invisible as you scroll down and shows when you scroll up
    // const backToTopBtn = document.getElementById('backToTop');

    // window.addEventListener('scroll', () => {
    //     const currentScroll = window.scrollY;

         // 🔹 keep existing back-to-top behavior
    //     if (currentScroll > 300) {
    //         backToTopBtn.classList.add('visible');
    //     } else {
    //         backToTopBtn.classList.remove('visible');
    //     }

       // 🔹 Do NOT hide navbar while mobile menu is open
    //     if (navLinks.classList.contains('active')) {
    //         lastScrollY = currentScroll;
    //         return;
    //     }

         // 🔹 Hide on scroll down, show on scroll up
    //     if (currentScroll > lastScrollY && currentScroll > 80) {
             // scrolling down
    //         navbar.classList.add('navbar--hidden');
    //     } else {
            // scrolling up or near top
    //         navbar.classList.remove('navbar--hidden');
    //     }

    //     lastScrollY = currentScroll;
    // });


    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const subject = "New enquiry from Innovative Solutions website";
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        // Construct mailto link
        const mailtoLink = `mailto:innovativesolutions.mar@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open mail client
        window.location.href = mailtoLink;

        // Optional: Show success message or reset form
        alert('Opening your email app to send the message...');
        contactForm.reset();
    });
});
