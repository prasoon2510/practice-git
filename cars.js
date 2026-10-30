
"use strict";

// =====================================
// AUTOVERSE 2026 JAVASCRIPT
// =====================================


// 1. MOBILE NAVIGATION

const autoVerseMenuToggle =
    document.getElementById("menuToggle");

const autoVerseNavLinks =
    document.getElementById("navLinks");

if (autoVerseMenuToggle && autoVerseNavLinks) {

    autoVerseMenuToggle.addEventListener("click", function () {

        autoVerseNavLinks.classList.toggle("active");

        const isOpen =
            autoVerseNavLinks.classList.contains("active");

        autoVerseMenuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        autoVerseMenuToggle.textContent =
            isOpen ? "✕" : "☰";
    });

    autoVerseNavLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            autoVerseNavLinks.classList.remove("active");

            autoVerseMenuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            autoVerseMenuToggle.textContent = "☰";
        });
    });
}


// 2. CAR SEARCH AND CATEGORY FILTER

const autoVerseSearch =
    document.getElementById("carSearch");

const autoVerseCategory =
    document.getElementById("categoryFilter");

const autoVerseCards =
    document.querySelectorAll(".car-card");

const autoVerseNoResults =
    document.getElementById("noResults");


function autoVerseFilterCars() {

    const searchText =
        autoVerseSearch.value.toLowerCase().trim();

    const selectedCategory =
        autoVerseCategory.value;

    let visibleCars = 0;

    autoVerseCards.forEach(function (card) {

        const cardText =
            card.textContent.toLowerCase();

        const cardCategory =
            card.dataset.category;

        const matchesSearch =
            cardText.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.hidden = false;
            visibleCars++;

        } else {

            card.hidden = true;
        }
    });

    if (autoVerseNoResults) {
        autoVerseNoResults.hidden = visibleCars !== 0;
    }
}


if (autoVerseSearch && autoVerseCategory) {

    autoVerseSearch.addEventListener(
        "input",
        autoVerseFilterCars
    );

    autoVerseCategory.addEventListener(
        "change",
        autoVerseFilterCars
    );
}


// 3. CONTACT FORM VALIDATION

const autoVerseContactForm =
    document.getElementById("contactForm");

const autoVerseFormMessage =
    document.getElementById("formMessage");


if (autoVerseContactForm && autoVerseFormMessage) {

    autoVerseContactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const carChoice =
                document.getElementById("carChoice").value;

            if (!name || !email || !carChoice) {

                autoVerseFormMessage.textContent =
                    "Please complete all required fields.";

                return;
            }

            autoVerseFormMessage.textContent =
                "Thank you, " + name +
                "! Your enquiry has been recorded in this demo.";

            autoVerseContactForm.reset();
        }
    );
}


// 4. AUTOMATIC FOOTER YEAR

const autoVerseYear =
    document.getElementById("currentYear");

if (autoVerseYear) {

    autoVerseYear.textContent =
        new Date().getFullYear();
}


// 5. SMOOTH INTERNAL NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(
    function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }
);
