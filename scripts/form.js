
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate the product select menu
const productSelect = document.querySelector("#product");

if (productSelect) {
    products.forEach((product) => {
        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });
}

// Count submitted reviews using localStorage
const reviewCountElement = document.querySelector("#reviewCount");

if (reviewCountElement) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount += 1;

    localStorage.setItem("reviewCount", reviewCount);

    reviewCountElement.textContent = reviewCount;
}

// Display the page's last modified date
const lastModifiedElement = document.querySelector("#lastModified");

if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}
