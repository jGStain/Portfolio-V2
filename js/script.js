lucide.createIcons();

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