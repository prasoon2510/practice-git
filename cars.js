
// ==================================================
// AUTOVERSE 2026 - JAVASCRIPT
// ==================================================


// ==================================================
// 1. CAR SEARCH AND CATEGORY FILTER
// ==================================================

const carSearch = document.getElementById("carSearch");

const carItems = document.querySelectorAll(".car-item");

const filterButtons = document.querySelectorAll(
  ".featured-section .filter-btn"
);

const noCarsMessage = document.getElementById("noCarsMessage");

let selectedCategory = "all";

function filterCars() {

  const searchValue = carSearch.value
    .trim()
    .toLowerCase();

  let visibleCount = 0;

  carItems.forEach(function(car) {

    const carText = car.textContent.toLowerCase();

    const categories = car.dataset.category || "";

    const matchesSearch =
      carText.includes(searchValue);

    const matchesCategory =
      selectedCategory === "all" ||
      categories.split(" ").includes(selectedCategory);

    const shouldShow =
      matchesSearch && matchesCategory;

    car.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount++;
    }

  });

  noCarsMessage.hidden = visibleCount !== 0;

}


// Search cars when the user types.
carSearch.addEventListener("input", filterCars);


// Filter cars when category buttons are clicked.
filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    filterButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    selectedCategory = this.dataset.filter;

    filterCars();

  });

});


// ==================================================
// 2. GALLERY FILTER
// ==================================================

const galleryButtons = document.querySelectorAll(
  ".gallery-filters .filter-btn"
);

const galleryItems = document.querySelectorAll(
  ".gallery-item"
);

galleryButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    galleryButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    const selected = this.dataset.galleryFilter;

    galleryItems.forEach(function(item) {

      const category = item.dataset.galleryCategory;

      const shouldShow =
        selected === "all" || category === selected;

      item.hidden = !shouldShow;

    });

  });

});


// ==================================================
// 3. GALLERY IMAGE LIGHTBOX
// ==================================================

const lightbox = document.createElement("div");

lightbox.className = "image-lightbox";

lightbox.innerHTML = `
  <button class="lightbox-close" aria-label="Close image">
    &times;
  </button>

  <img src="" alt="Enlarged car photograph">

  <p class="lightbox-caption"></p>
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");

const lightboxCaption =
  lightbox.querySelector(".lightbox-caption");

const lightboxClose =
  lightbox.querySelector(".lightbox-close");

galleryItems.forEach(function(item) {

  item.addEventListener("click", function() {

    const image = item.querySelector("img");

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightboxCaption.textContent =
      item.querySelector("span").textContent;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function closeLightbox() {

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function(event) {

  if (event.target === lightbox) {
    closeLightbox();
  }

});

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closeLightbox();
  }

});


// ==================================================
// 4. BACK TO TOP BUTTON
// ==================================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

  if (window.scrollY > 400) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});

backToTop.addEventListener("click", function() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ==================================================
// 5. MOBILE NAVIGATION
// ==================================================

const navigationLinks = document.querySelectorAll(
  "#mainNavigation .nav-link, #mainNavigation .nav-contact"
);

navigationLinks.forEach(function(link) {

  link.addEventListener("click", function() {

    const navigation =
      document.getElementById("mainNavigation");

    if (
      navigation.classList.contains("show") &&
      window.bootstrap
    ) {

      bootstrap.Collapse
        .getOrCreateInstance(navigation)
        .hide();

    }

  });

});


// ==================================================
// 6. CONTACT FORM
// ==================================================

const contactForm =
  document.getElementById("contactForm");

const contactFeedback =
  document.getElementById("contactFeedback");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("contactName").value.trim();

  const email =
    document.getElementById("contactEmail").value.trim();

  const subject =
    document.getElementById("contactSubject").value.trim();

  const message =
    document.getElementById("contactMessage").value.trim();


  if (!name || !email || !subject || !message) {

    contactFeedback.textContent =
      "Please fill in all the fields.";

    return;

  }


  contactFeedback.textContent =
    "Thank you, " + name +
    "! Your demo message has been received on this page.";


  contactForm.reset();

});


// ==================================================
// 7. NEWSLETTER FORM
// ==================================================

const newsletterForm =
  document.getElementById("newsletterForm");

const newsletterFeedback =
  document.getElementById("newsletterFeedback");

newsletterForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const email =
    document.getElementById("newsletterEmail").value.trim();

  if (!email) {

    newsletterFeedback.textContent =
      "Please enter your email address.";

    return;

  }

  newsletterFeedback.textContent =
    "Thank you for your interest in AUTOVERSE!";

  newsletterForm.reset();

});


// ==================================================
// 8. SCROLL REVEAL ANIMATION
// ==================================================

const revealElements = document.querySelectorAll(
  ".section-heading, .category-card, .car-card, " +
  ".tech-card, .f1-info-card, .history-item, .intro-image"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    function(entries, observer) {

      entries.forEach(function(entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

  });

}


// ==================================================
// 9. CURRENT YEAR IN FOOTER
// ==================================================

const footerCopyright =
  document.querySelector(".footer-bottom span");

if (footerCopyright) {

  footerCopyright.textContent =
    "© " + new Date().getFullYear() +
    " AUTOVERSE. All rights reserved.";

}


// ==================================================
// AUTOVERSE JAVASCRIPT INITIALIZED
// ==================================================

console.log(
  "AUTOVERSE 2026 - Welcome to the world of cars!"
);
