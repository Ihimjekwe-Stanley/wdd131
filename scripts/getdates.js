const today = new Date();

const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

yearSpan.innerHTML = ${today.getFullYear()}  Stanley Ihimjekwe - Port Harcourt, Nigeria;

lastModifiedParagraph.textContent = Last Modification: ${document.lastModified};