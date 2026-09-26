const today = new Date();

const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const temperature = 31;
const windSpeed = 11;

yearSpan.innerHTML = `${today.getFullYear()} Stanley Ihimjekwe - Port Harcourt, Nigeria`;

lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

const windChillElement = document.querySelector("#windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    
    let chill = calculateWindChill(temperature, windSpeed);
    windChillElement.innerHTML = `${chill.toFixed(1)} &deg;C`;
} else {
    windChillElement.innerHTML = "N/A";
}