// script.js
document.addEventListener("DOMContentLoaded", function() {
    const rotatingText = document.querySelector('.rotating-text');
    const words = ["Style", "Elegance", "Minimalism", "Comfort"];
    let currentIndex = 0;

    function rotateWord() {
        rotatingText.textContent = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(rotateWord, 2000); // Change word every 2 seconds
});
