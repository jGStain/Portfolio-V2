lucide.createIcons();
const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");
const navLinks = document.querySelectorAll(".nav_links a");

const themeToggle = document.querySelector(".theme_toggle");
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    rootElement.setAttribute("data-theme", "light");
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
};

themeToggle.addEventListener("click", () => {
    const lightThemeIsActive = 
        rootElement.getAttribute("data-theme") === "light";

        if (lightThemeIsActive) {
            rootElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
            themeToggle.setAttribute("aria-label", "Switch to light mode");
        } else {
            rootElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
        };
});

const closeMobileMenu = () => {
    navMenu.classList.remove("nav_menu_open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");

    navToggle.innerHTML = `<i data-lucide="menu"></i>`;
    lucide.createIcons();
};

navToggle.addEventListener("click", () => {
    const menuIsOpen = navMenu.classList.toggle("nav_menu_open");

    navToggle.setAttribute("aria-expanded", menuIsOpen);
    navToggle.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    navToggle.innerHTML = menuIsOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();
});

navLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});