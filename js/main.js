(() => {
  "use strict";

  const select = (el, all = false) =>
    all ? [...document.querySelectorAll(el)] : document.querySelector(el);

  /**
   * Navbar shadow on scroll
   */
  const navbar = select("#navbar");
  const onScrollNavbar = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScrollNavbar);
  onScrollNavbar();

  /**
   * Mobile nav toggle
   */
  const navToggle = select(".mobile-nav-toggle");
  const toggleIcon = navToggle.querySelector("i");
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
    toggleIcon.classList.toggle("bx-menu");
    toggleIcon.classList.toggle("bx-x");
  });

  const closeMobileNav = () => {
    if (document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
      toggleIcon.classList.add("bx-menu");
      toggleIcon.classList.remove("bx-x");
    }
  };

  select(".scrollto", true).forEach((link) =>
    link.addEventListener("click", closeMobileNav)
  );

  /**
   * Active nav link on scroll
   */
  const navLinks = select("#nav-menu .nav-link", true);
  const setActiveLink = () => {
    const pos = window.scrollY + 120;
    navLinks.forEach((link) => {
      const hash = link.hash;
      if (!hash) return;
      const section = select(hash);
      if (!section) return;
      const inSection =
        pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight;
      link.classList.toggle("active", inSection);
    });
  };
  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("load", setActiveLink);

  /**
   * Back to top button
   */
  const backToTop = select(".back-to-top");
  const toggleBackToTop = () => {
    backToTop.classList.toggle("active", window.scrollY > 300);
  };
  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();

  /**
   * Hero typed effect
   */
  const typed = select(".typed");
  if (typed && window.Typed) {
    new Typed(".typed", {
      strings: typed.getAttribute("data-typed-items").split(","),
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
    });
  }

  /**
   * Footer year
   */
  const year = select("#year");
  if (year) year.textContent = new Date().getFullYear();

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    if (window.AOS) {
      AOS.init({
        duration: 700,
        easing: "ease-out",
        once: true,
        offset: 60,
      });
    }
  });
})();
