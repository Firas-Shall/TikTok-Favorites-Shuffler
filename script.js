// Global array to store the links
let links = [];

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Handles the file upload, extracts links, and displays them.
 */
function shuffleLinks() {
    const fileInput = document.getElementById("fileInput");
    const shuffledLinksContainer = document.getElementById("shuffledLinks");

    // Check if a file is uploaded
    if (!fileInput.files.length) {
        alert("Please upload a file!");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result.split("\n");

        // Extract valid links
        links = content
            .filter(line => line.startsWith("Link")) // Find lines starting with "Link"
            .map(line => line.slice(6).trim()); // Extract the link after "Link: "

        if (!links.length) {
            alert("No valid links found in the file!");
            return;
        }

        // Shuffle the links
        links = shuffleArray(links);

        // Display the shuffled links (optional)
        shuffledLinksContainer.innerHTML = links
            .map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`)
            .join("");
    };

    reader.readAsText(file);
}

/**
 * Opens a random video from the shuffled links.
 */
function openRandomVideo() {
    if (links.length === 0) {
        alert("No links available! Please upload a file and shuffle the links first.");
        return;
    }

    // Select a random link and open it
    const randomLink = links[Math.floor(Math.random() * links.length)];
    window.open(randomLink, "_blank");
}
