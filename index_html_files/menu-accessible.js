(function () {
    "use strict";

    function initAccessibleMenu() {
        var mobileMenu = window.matchMedia("(max-width: 730px)");
        var mobileCards = window.matchMedia("(max-width: 565px)");

        function getMenuElements() {
            return {
                button: document.getElementById("menu-responsive"),
                checkbox: document.getElementById("checkbox-responsive"),
                menu: document.getElementById("header-box")
            };
        }

        function menuIsVisible(button) {
            return mobileMenu.matches && window.getComputedStyle(button).display !== "none";
        }

        function syncAccessibility() {
            var elements = getMenuElements();
            if (!elements.button || !elements.checkbox || !elements.menu) {
                return;
            }

            var responsiveMenuIsVisible = menuIsVisible(elements.button);
            var menuIsOpen = responsiveMenuIsVisible && elements.checkbox.checked;

            elements.button.setAttribute("role", "button");
            elements.button.setAttribute("aria-label", "Menú de navegación");
            elements.button.setAttribute("aria-controls", "header-box");
            elements.button.removeAttribute("for");
            elements.button.tabIndex = responsiveMenuIsVisible ? 0 : -1;
            elements.button.setAttribute("aria-expanded", String(menuIsOpen));

            elements.checkbox.setAttribute("aria-hidden", "true");
            elements.menu.toggleAttribute("inert", responsiveMenuIsVisible && !menuIsOpen);
            elements.menu.setAttribute("aria-hidden", String(responsiveMenuIsVisible && !menuIsOpen));

            document.querySelectorAll(".libro-pc").forEach(function (card) {
                card.toggleAttribute("inert", mobileCards.matches);
                card.setAttribute("aria-hidden", String(mobileCards.matches));
            });
        }

        function toggleMenu() {
            var elements = getMenuElements();
            if (!elements.checkbox || !menuIsVisible(elements.button)) {
                return;
            }

            elements.checkbox.checked = !elements.checkbox.checked;
            elements.checkbox.dispatchEvent(new Event("change", { bubbles: true }));
        }

        document.addEventListener("keydown", function (event) {
            if (event.target.id !== "menu-responsive" || (event.key !== "Enter" && event.key !== " ")) {
                return;
            }

            event.preventDefault();
            toggleMenu();
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest("#menu-responsive")) {
                return;
            }

            event.preventDefault();
            toggleMenu();
        });

        document.addEventListener("change", function (event) {
            if (event.target.id === "checkbox-responsive") {
                syncAccessibility();
            }
        });

        new MutationObserver(function (mutations) {
            if (mutations.some(function (mutation) {
                return mutation.target.id === "menu-responsive";
            })) {
                syncAccessibility();
            }
        }).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
            subtree: true
        });

        window.addEventListener("load", syncAccessibility);
        window.addEventListener("resize", syncAccessibility);
        window.addEventListener("scroll", function () {
            window.requestAnimationFrame(syncAccessibility);
        }, { passive: true });
        syncAccessibility();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAccessibleMenu);
    } else {
        initAccessibleMenu();
    }
}());
