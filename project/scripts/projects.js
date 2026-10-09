
/* =========================
   POULTRY FEED DATA
========================= */

const feeds = [
    {
        name: "Broiler Starter",
        category: "Broiler",
        stage: "0–4 weeks",
        purpose: "Supports early growth, muscle development, and healthy feather formation.",
        ingredients: "Maize, soybean meal, wheat bran, fish meal, vitamins, and minerals."
    },
    {
        name: "Broiler Finisher",
        category: "Broiler",
        stage: "5 weeks to market",
        purpose: "Supports weight gain and efficient growth before birds reach market weight.",
        ingredients: "Maize, soybean meal, wheat bran, vegetable protein sources, vitamins, and minerals."
    },
    {
        name: "Layer Grower",
        category: "Layer",
        stage: "8–18 weeks",
        purpose: "Supports steady development of pullets before they begin laying eggs.",
        ingredients: "Maize, soybean meal, wheat bran, calcium sources, vitamins, and minerals."
    },
    {
        name: "Layer Mash",
        category: "Layer",
        stage: "18 weeks and above",
        purpose: "Supports egg production, shell quality, and overall health of laying birds.",
        ingredients: "Maize, soybean meal, wheat bran, limestone, bone meal, vitamins, and minerals."
    },
    {
        name: "Cockerel Grower",
        category: "Cockerel",
        stage: "6 weeks and above",
        purpose: "Supports healthy growth and development of young male chickens.",
        ingredients: "Maize, soybean meal, wheat bran, protein sources, vitamins, and minerals."
    }
];


/* =========================
   MOBILE NAVIGATION
========================= */

function setupNavigation() {
    const menuButton = document.querySelector("#menuButton");
    const mainNav = document.querySelector("#mainNav");

    if (menuButton && mainNav) {
        menuButton.addEventListener("click", () => {
            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");

            menuButton.setAttribute("aria-expanded", isOpen);

            if (isOpen) {
                menuButton.setAttribute("aria-label", "Close navigation menu");
            } else {
                menuButton.setAttribute("aria-label", "Open navigation menu");
            }
        });
    }
}


/* =========================
   DISPLAY FEEDS
========================= */

function displayFeeds(feedList) {
    const feedContainer = document.querySelector("#feedContainer");

    if (!feedContainer) {
        return;
    }

    feedContainer.innerHTML = "";

    if (feedList.length === 0) {
        feedContainer.innerHTML = `
            <p class="form-message">
                No feed types were found for this category.
            </p>
        `;
        return;
    }

    feedList.forEach((feed) => {
        const feedCard = document.createElement("article");

        feedCard.classList.add("feed-item");

        feedCard.innerHTML = `
            <h2>${feed.name}</h2>
            <p class="stage">Category: ${feed.category}</p>
            <p><strong>Recommended stage:</strong> ${feed.stage}</p>
            <p><strong>Purpose:</strong> ${feed.purpose}</p>
            <p><strong>Common ingredients:</strong> ${feed.ingredients}</p>
        `;

        feedContainer.appendChild(feedCard);
    });
}


/* =========================
   FILTER FEEDS
========================= */

function setupFeedFilter() {
    const filter = document.querySelector("#feedFilter");

    if (!filter) {
        return;
    }

    displayFeeds(feeds);

    filter.addEventListener("change", () => {
        const selectedCategory = filter.value;

        if (selectedCategory === "All") {
            displayFeeds(feeds);
        } else {
            const filteredFeeds = feeds.filter(
                (feed) => feed.category === selectedCategory
            );

            displayFeeds(filteredFeeds);
        }
    });
}


/* =========================
   FORM HANDLING
========================= */

function setupForm() {
    const form = document.querySelector("#feedForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const farmerName = document.querySelector("#farmerName").value.trim();
        const birdType = document.querySelector("#birdType").value;
        const question = document.querySelector("#question").value.trim();
        const message = document.querySelector("#formMessage");

        if (!farmerName || !birdType || !question) {
            message.textContent = `
                Please complete all required fields before submitting the form.
            `;
            return;
        }

        const submissionCount =
            Number(localStorage.getItem("feedQuestions")) || 0;

        const newCount = submissionCount + 1;

        localStorage.setItem("feedQuestions", newCount);

        message.textContent = `
            Thank you, ${farmerName}! Your ${birdType} feeding question has
            been received. This is question number ${newCount}.
        `;

        form.reset();
    });
}


/* =========================
   CURRENT YEAR
========================= */

function displayCurrentYear() {
    const yearElement = document.querySelector("#currentYear");

    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}


/* =========================
   INITIALIZE WEBSITE
========================= */

function initializeWebsite() {
    setupNavigation();
    setupFeedFilter();
    setupForm();
    displayCurrentYear();
}

initializeWebsite();
