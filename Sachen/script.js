// Thanks to Reto! :) For helping me with setting up the Javascript logic to open and close mobile menu.

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("[data-menu-button]").addEventListener("click", () => {
        document.querySelector(".mobile button").classList.toggle("display");
        document.querySelectorAll(".bar").forEach(el => {
            el.classList.toggle("display");    
        });
        document.querySelector(".mobile-menu-container").classList.toggle("display");
    });
});