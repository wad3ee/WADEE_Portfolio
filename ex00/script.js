"use strict";

/* =========================================
   WADEE PORTFOLIO — THEME ENGINE
   ========================================= */

const body = document.body;

/* Create Theme Button */
const themeButton = document.createElement("button");

themeButton.type = "button";
themeButton.id = "theme-toggle";
themeButton.className = "theme-toggle";
themeButton.setAttribute("aria-label", "Toggle theme");
themeButton.textContent = "☀️";

document.body.appendChild(themeButton);


/* =========================================
   THEME STATE
   ========================================= */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeButton.textContent = "🌙";
}


/* =========================================
   THEME SWITCHER
   ========================================= */

themeButton.addEventListener("click", function () {

    body.classList.toggle("light-theme");

    const isLight = body.classList.contains("light-theme");

    if (isLight) {
        themeButton.textContent = "🌙";
        localStorage.setItem("portfolio-theme", "light");
    } else {
        themeButton.textContent = "☀️";
        localStorage.setItem("portfolio-theme", "dark");
    }

});


/* =========================================
   CONSOLE MESSAGE
   ========================================= */

console.log(
    "%cWADEE PORTFOLIO",
    "color:#38bdf8;font-size:20px;font-weight:bold;"
);

console.log(
    "%cTheme Engine initialized successfully.",
    "color:#94a3b8;font-size:14px;"
);
/* =========================================
   SCROLL PROGRESS
   ========================================= */

const progressBar = document.createElement("div");

progressBar.id = "scroll-progress";

document.body.prepend(progressBar);


function updateScrollProgress() {
    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${scrollPercentage}%`;
}


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll("header nav a");


function updateActiveNavigation() {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}


/* =========================================
   SCROLL EVENT
   ========================================= */

window.addEventListener("scroll", function () {
    updateScrollProgress();
    updateActiveNavigation();
});


/* Initial state */

updateScrollProgress();
updateActiveNavigation();
/* =========================================
   SCROLL REVEAL ANIMATION
   ========================================= */

const revealElements = document.querySelectorAll(
    "section, article, #contact form, #about img"
);

const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {
    element.classList.add("reveal-hidden");
    revealObserver.observe(element);
});
/* =========================================
   CONTACT FORM VALIDATION
   ========================================= */
    /* =========================================
   CONTACT FORM VALIDATION
   ========================================= */

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    const formMessage = document.createElement("p");

    formMessage.id = "form-message";
    formMessage.setAttribute("role", "status");

    contactForm.appendChild(formMessage);


    contactForm.addEventListener("submit", function (event) {

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        formMessage.className = "";


        if (name === "") {
            event.preventDefault();

            showFormError("Please enter your name.");
            nameInput.focus();

            return;
        }


        if (!email.includes("@") || !email.includes(".")) {
            event.preventDefault();

            showFormError("Please enter a valid email address.");
            emailInput.focus();

            return;
        }


        if (subject === "") {
            event.preventDefault();

            showFormError("Please enter a subject.");
            subjectInput.focus();

            return;
        }


        if (message.length < 10) {
            event.preventDefault();

            showFormError(
                "Message must contain at least 10 characters."
            );

            messageInput.focus();

            return;
        }

        /*
         * Validation passed.
         * Do not call preventDefault().
         * The browser will submit the form to Formspree.
         */

    });


    function showFormError(message) {

        formMessage.textContent = message;

        formMessage.classList.add("error");
    }

}

   
/* =========================================
   TYPING EFFECT
   ========================================= */

const heroRole = document.querySelector("#home > div > p:first-child");

if (heroRole) {

    const originalText = heroRole.textContent.trim();

    heroRole.textContent = "";

    let characterIndex = 0;

    function typeHeroRole() {

        if (characterIndex < originalText.length) {

            heroRole.textContent += originalText.charAt(characterIndex);

            characterIndex++;

            setTimeout(typeHeroRole, 35);
        }
    }

    typeHeroRole();
}


/* =========================================
   DYNAMIC COPYRIGHT YEAR
   ========================================= */

const copyrightText = document.querySelector("footer p");

if (copyrightText) {

    const currentYear = new Date().getFullYear();

    copyrightText.innerHTML =
        `&copy; ${currentYear} Wadee Al-Sallaq. All rights reserved.`;
}
/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const mainNavigation = document.querySelector("header nav");
const navigationMenu = document.querySelector("header nav ul");

if (mainNavigation && navigationMenu) {

    const mobileMenuButton = document.createElement("button");

    mobileMenuButton.type = "button";
    mobileMenuButton.className = "mobile-menu-toggle";
    mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.textContent = "☰";

    mainNavigation.insertBefore(
        mobileMenuButton,
        navigationMenu
    );


    mobileMenuButton.addEventListener("click", function () {

        const isOpen = navigationMenu.classList.toggle("mobile-open");

        mobileMenuButton.textContent = isOpen ? "✕" : "☰";
        mobileMenuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        mobileMenuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });


    const mobileNavigationLinks =
        navigationMenu.querySelectorAll("a");

    mobileNavigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigationMenu.classList.remove("mobile-open");

            mobileMenuButton.textContent = "☰";

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });

    });

}
