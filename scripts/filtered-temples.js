const today = new Date();

const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 70884,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  },
  {
    templeName: "Recife Brazil",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37200,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  }

  // Add more temple objects here...
];

const container = document.getElementById('temple-container');

const generateTempleCards = (templeList) => {

    container.innerHTML = "";
    
  const cardsHTML = templeList.map(temple => {
    return `
      <figure class="temple-card">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img 
          src="${temple.imageUrl}" 
          alt="${temple.templeName} Temple" 
          loading="lazy" 
        />
      </figure>
    `;
  }).join(""); 

  container.innerHTML = cardsHTML;
};

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

if (homeLink) homeLink.addEventListener("click", () => generateTempleCards(temples));

if (oldLink) oldLink.addEventListener("click", () => {
  generateTempleCards(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900));
});

if (newLink) newLink.addEventListener("click", () => {
  generateTempleCards(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000));
});

if (largeLink) largeLink.addEventListener("click", () => {
  generateTempleCards(temples.filter(temple => temple.area > 90000));
});

if (smallLink) smallLink.addEventListener("click", () => {
  generateTempleCards(temples.filter(temple => temple.area < 10000));
});

generateTempleCards(temples);


yearSpan.innerHTML = `${today.getFullYear()}`;

lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;