/* ==========================================
   AUTOVERSE 2026 - JAVASCRIPT
========================================== */

// 1. IMAGE COLLECTION
// These are externally hosted Unsplash photographs.
// Some photos are representative rather than exact model photos.

const carPhotos = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80"
];


// 2. CAR DATABASE
// Each category has 20 vehicles.

const categories = {

    sports: {
        label: "SPORTS CAR",
        cars: [
            "Ferrari 296 GTB",
            "Lamborghini Revuelto",
            "Porsche 911 GT3 RS",
            "McLaren 750S",
            "Chevrolet Corvette Z06",
            "Aston Martin Vantage",
            "Nissan GT-R",
            "Toyota GR Supra",
            "Ford Mustang GT",
            "Mercedes-AMG GT",
            "BMW M4 Competition",
            "Audi R8",
            "Lexus LC 500",
            "Jaguar F-Type",
            "Maserati MC20",
            "Lotus Emira",
            "Alpine A110",
            "Dodge Challenger",
            "Porsche 718 Cayman",
            "Ferrari F8 Tributo"
        ]
    },

    electric: {
        label: "ELECTRIC CAR",
        cars: [
            "Tesla Model S",
            "Tesla Model 3",
            "Tesla Model Y",
            "Porsche Taycan",
            "Hyundai IONIQ 5",
            "Kia EV6",
            "BMW i4",
            "BMW iX",
            "Mercedes EQS",
            "Audi Q8 e-tron",
            "Rivian R1T",
            "Lucid Air",
            "BYD Seal",
            "BYD Atto 3",
            "Tata Nexon EV",
            "Tata Punch EV",
            "Mahindra BE 6",
            "Mahindra XEV 9e",
            "Volvo EX30",
            "Rolls-Royce Spectre"
        ]
    },

    f1: {
        label: "FORMULA 1",
        cars: [
            "Ferrari SF-26",
            "Mercedes F1 Car",
            "Red Bull Racing Car",
            "McLaren F1 Car",
            "Aston Martin F1 Car",
            "Alpine F1 Car",
            "Williams F1 Car",
            "Haas F1 Car",
            "Audi F1 Car",
            "Cadillac F1 Car",
            "Ferrari SF-25",
            "McLaren MCL39",
            "Red Bull RB21",
            "Mercedes W16",
            "Aston Martin AMR25",
            "Alpine A525",
            "Williams FW47",
            "Haas VF-25",
            "Sauber C45",
            "AlphaTauri AT04"
        ]
    },

    luxury: {
        label: "LUXURY CAR",
        cars: [
            "Rolls-Royce Phantom",
            "Rolls-Royce Ghost",
            "Rolls-Royce Cullinan",
            "Bentley Continental GT",
            "Bentley Flying Spur",
            "Mercedes-Maybach S-Class",
            "Mercedes-Benz S-Class",
            "BMW 7 Series",
            "BMW i7",
            "Audi A8 L",
            "Lexus LS",
            "Range Rover SV",
            "Porsche Panamera",
            "Maserati Quattroporte",
            "Aston Martin DB12",
            "Ferrari Roma",
            "Lamborghini Urus",
            "Genesis G90",
            "Cadillac Celestiq",
            "Lucid Air Sapphire"
        ]
    },

    suv: {
        label: "SUV",
        cars: [
            "Range Rover Sport",
            "Land Rover Defender",
            "Toyota Land Cruiser",
            "Toyota Fortuner",
            "Jeep Wrangler",
            "Jeep Grand Cherokee",
            "BMW X5",
            "BMW X7",
            "Mercedes-Benz G-Class",
            "Mercedes GLE",
            "Audi Q7",
            "Audi Q8",
            "Porsche Cayenne",
            "Lamborghini Urus",
            "Ferrari Purosangue",
            "Volvo XC90",
            "Hyundai Tucson",
            "Kia EV9",
            "Mahindra Scorpio-N",
            "Tata Safari"
        ]
    },

    classic: {
        label: "CLASSIC CAR",
        cars: [
            "Ford Mustang 1967",
            "Chevrolet Camaro 1969",
            "Jaguar E-Type",
            "Mercedes-Benz 300SL",
            "Porsche 356",
            "Porsche 911 Classic",
            "Ferrari 250 GTO",
            "Aston Martin DB5",
            "Volkswagen Beetle",
            "Mini Cooper Classic",
            "Dodge Charger 1969",
            "Ford GT40",
            "Shelby Cobra",
            "Lamborghini Miura",
            "Maserati Ghibli Classic",
            "Rolls-Royce Silver Shadow",
            "Cadillac Eldorado",
            "Toyota 2000GT",
            "Nissan Skyline GT-R R34",
            "BMW 2002"
        ]
    }

};


// 3. GENERATE ALL CAR CARDS

const carGrid = document.getElementById("carGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyMessage = document.getElementById("emptyMessage");

let allCars = [];

Object.entries(categories).forEach(([category, details]) => {

    details.cars.forEach((carName, index) => {

        allCars.push({
            name: carName,
            category: category,
            label: details.label,
            image: carPhotos[index % carPhotos.length]
        });

    });

});


function displayCars(carList) {

    carGrid.innerHTML = "";

    resultsCount.textContent =
        `Showing ${carList.length} cars`;

    emptyMessage.style.display =
        carList.length === 0 ? "block" : "none";

    carList.forEach((car, index) => {

        const card = document.createElement("article");

        card.className = "car-card";

        card.innerHTML = `
            <div class="car-image">
                <img
                    src="${car.image}"
                    alt="${car.name}"
                    loading="lazy"
                >

                <span class="car-category">
                    ${car.label}
                </span>
            </div>

            <div class="car-details">

                <h3>${car.name}</h3>

                <p>
                    Discover the design, engineering
                    and automotive character of the
                    ${car.name}.
                </p>

                <div class="car-card-footer">

                    <span>
                        <i class="fa-solid fa-car"></i>
                        ${car.category.toUpperCase()}
                    </span>

                    <button
                        class="view-car"
                        type="button"
                        data-car-name="${car.name}"
                        data-car-image="${car.image}"
                    >
                        VIEW PHOTO
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>
        `;

        card.style.animationDelay = `${(index % 6) * 60}ms`;

        carGrid.appendChild(card);

    });

}


// Display all cars when the website loads.

displayCars(allCars);


// 4. CATEGORY FILTER BUTTONS

const filterButtons =
    document.querySelectorAll(".filter-btn");

let currentCategory = "all";


function filterCars(category) {

    currentCategory = category;

    filterButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.filter === category
        );

    });

    const searchValue =
        document.getElementById("carSearch")
        .value.toLowerCase().trim();

    const filteredCars = allCars.filter(car => {

        const matchesCategory =
            category === "all" || car.category === category;

        const matchesSearch =
            car.name.toLowerCase().includes(searchValue) ||
            car.category.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;

    });

    displayCars(filteredCars);

}


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterCars(button.dataset.filter);

    });

});


// 5. SEARCH CARS

const carSearch = document.getElementById("carSearch");

carSearch.addEventListener("input", () => {

    const searchValue =
        carSearch.value.toLowerCase().trim();

    const filteredCars = allCars.filter(car => {

        const matchesCategory =
            currentCategory === "all" ||
            car.category === currentCategory;

        const matchesSearch =
            car.name.toLowerCase().includes(searchValue) ||
            car.category.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;

    });

    displayCars(filteredCars);

});


// 6. CATEGORY CARDS NAVIGATION

document.querySelectorAll("[data-category-link]")
.forEach(link => {

    link.addEventListener("click", () => {

        const category = link.dataset.categoryLink;

        filterCars(category);

    });

});


// 7. FEATURE BUTTONS

document.querySelectorAll("[data-jump-category]")
.forEach(button => {

    button.addEventListener("click", () => {

        filterCars(button.dataset.jumpCategory);

    });

});


// 8. FOOTER CATEGORY LINKS

document.querySelectorAll("[data-footer-category]")
.forEach(link => {

    link.addEventListener("click", () => {

        filterCars(link.dataset.footerCategory);

    });

});


// 9. GALLERY PHOTOS

const galleryGrid =
    document.getElementById("galleryGrid");

const galleryItems = [];


Object.entries(categories).forEach(([category, details]) => {

    details.cars.forEach((carName, index) => {

        galleryItems.push({

            name: carName,

            category: category,

            image: carPhotos[index % carPhotos.length]

        });

    });

});


function displayGallery(category = "all") {

    galleryGrid.innerHTML = "";

    const filteredItems = galleryItems.filter(item => {

        return category === "all" ||
            item.category === category;

    });

    filteredItems.forEach((item, index) => {

        const galleryItem = document.createElement("div");

        galleryItem.className = "gallery-item reveal visible";

        galleryItem.dataset.category = item.category;

        galleryItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

        `;

        galleryItem.addEventListener("click", () => {

            openLightbox(item.image, item.name);

        });

        galleryGrid.appendChild(galleryItem);

    });

}


displayGallery();


// 10. GALLERY FILTERS

const galleryFilters =
    document.querySelectorAll(".gallery-filter");

galleryFilters.forEach(button => {

    button.addEventListener("click", () => {

        galleryFilters.forEach(item =>
            item.classList.remove("active")
        );

        button.classList.add("active");

        displayGallery(button.dataset.gallery);

    });

});


// 11. LIGHTBOX IMAGE VIEWER

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");


function openLightbox(image, name) {

    lightboxImage.src = image;

    lightboxCaption.textContent = name;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";

}


function hideLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


closeLightbox.addEventListener("click", hideLightbox);


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        hideLightbox();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        hideLightbox();

    }

});


// 12. VIEW PHOTO BUTTONS

carGrid.addEventListener("click", event => {

    const button = event.target.closest(".view-car");

    if (!button) return;

    openLightbox(
        button.dataset.carImage,
        button.dataset.carName
    );

});


// 13. MOBILE MENU

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("open")) {

        icon.classList.replace("fa-bars", "fa-xmark");

    } else {

        icon.classList.replace("fa-xmark", "fa-bars");

    }

});


navbar.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


// 14. HEADER SCROLL EFFECT

const header = document.getElementById("header");

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    header.classList.toggle(
        "scrolled",
        window.scrollY > 80
    );

    backToTop.classList.toggle(
        "show",
        window.scrollY > 400
    );

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 15. SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


function observeRevealElements() {

    document.querySelectorAll(".reveal:not(.visible)")
    .forEach(element => {

        revealObserver.observe(element);

    });

}


observeRevealElements();


// 16. CONTACT FORM DEMO

const contactForm =
    document.getElementById("contactForm");

const contactFeedback =
    document.getElementById("contactFeedback");


contactForm.addEventListener("submit", event => {

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
            "Please complete all fields.";

        return;

    }


    contactFeedback.textContent =
        "Thank you, " + name +
        "! This is a demo form. Connect a backend to send your message.";

    contactForm.reset();

});


// 17. SEARCH BUTTON

document.getElementById("searchToggle")
.addEventListener("click", () => {

    document.getElementById("carSearch").focus();

    document.getElementById("cars")
    .scrollIntoView({ behavior: "smooth" });

});


// 18. CURRENT YEAR

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// 19. LOADING SCREEN

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
        .classList.add("hide");

    }, 700);

});


// 20. IMAGE ERROR HANDLING

document.addEventListener("error", event => {

    if (event.target.tagName === "IMG") {

        event.target.alt = "Car photo unavailable";

        event.target.style.background = "#202b3a";

    }

}, true);