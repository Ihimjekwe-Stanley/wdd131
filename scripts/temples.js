const today = new Date();

const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


yearSpan.innerHTML = ${today.getFullYear()} lorem10;

lastModifiedParagraph.textContent = Last Modification: ${document.lastModified};