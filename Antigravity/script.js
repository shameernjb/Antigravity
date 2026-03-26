document.addEventListener("DOMContentLoaded", () => {
    // Portfolio Filters
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterValue = btn.getAttribute("data-filter");
            portfolioItems.forEach(item => {
                const category = item.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    item.style.display = "block";
                    item.animate([
                        { opacity: 0, transform: 'scale(0.95)' },
                        { opacity: 1, transform: 'scale(1)' }
                    ], {
                        duration: 300,
                        fill: "forwards",
                        easing: "ease-out"
                    });
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Parallax Effect on Hero Background
    const parallaxImg = document.querySelector('.parallax-img');
    if(parallaxImg) {
        window.addEventListener('scroll', () => {
            let scrolled = window.pageYOffset;
            let rate = scrolled * 0.35;
            // Only translate if scrolled is within hero range to save performance
            if (scrolled < window.innerHeight) {
                parallaxImg.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        }, { passive: true });
    }
});
