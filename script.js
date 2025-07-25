   
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Only close if on mobile
                    mobileMenu.style.display = 'none';
                }
            });
        });

        // Scroll to Top Button
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        // Show/hide the button based on scroll position
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        };

        // Smooth scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth scroll for "View My Work" button
        const viewMyWorkBtn = document.getElementById('viewMyWorkBtn');
        if (viewMyWorkBtn) {
            viewMyWorkBtn.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default anchor click behavior
                const targetId = this.getAttribute('href'); // Get the href value (#projects)
                const targetSection = document.querySelector(targetId); // Select the target section

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - document.querySelector('.header').offsetHeight, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Highlight active navigation link on scroll
        const sections = document.querySelectorAll('section');
        const navLinksDesktop = document.querySelectorAll('.nav-links a');
        const navLinksMobile = document.querySelectorAll('.mobile-menu-overlay a');

        function highlightNavLink() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - document.querySelector('.header').offsetHeight; // Adjust for fixed header
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinksDesktop.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });

            navLinksMobile.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', highlightNavLink);
        window.addEventListener('load', highlightNavLink); // Call on load to set initial active link
