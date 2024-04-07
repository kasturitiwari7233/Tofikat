// Select carousel elements
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let imageIndex = 0; // Initialize index of current image

// Function to show the current image
function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    images.forEach((image, idx) => {
        if (idx === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Show the initial image
showImage(imageIndex);

// Event listener for the previous button
prevButton.addEventListener('click', () => {
    // Calculate the new index after moving to the previous image
    imageIndex = (imageIndex - 1 + carouselImages.children.length) % carouselImages.children.length;
    // Call the showImage function to display the updated image
    showImage(imageIndex);
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
    // Calculate the new index after moving to the next image
    imageIndex = (imageIndex + 1) % carouselImages.children.length;
    // Call the showImage function to display the updated image
    showImage(imageIndex);
});

function redirectToPage() {
    window.location.href = 'index.html';
}

function checkSecretCode() {
    var secretCodeInput = document.getElementById("secretCodeInput").value;
    // Check if the input matches the correct secret code
    if (secretCodeInput === "I love you") {
        // Redirect to the next page if the input is correct
        window.location.href = "home.html";
    } else {
        // Show an error message or handle incorrect input
        alert("Try again bitch.");
    }
}

// Get the input element
var secretCodeInput = document.getElementById("secretCodeInput");

// Add event listener for "keydown" event
secretCodeInput.addEventListener("keydown", function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default action of the "Enter" key (form submission)
        event.preventDefault();
        // Programmatically click the submit button
        document.getElementById("submitBtn").click();
    }
});