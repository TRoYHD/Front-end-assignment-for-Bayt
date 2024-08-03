document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('#hiringStage option');
    options.forEach(option => {
        option.style.fontWeight = '600'; // Semi-bold
    });
    // Swipe functionality for the profile section
    const swipeButton = document.querySelector(".swipe-button");
    const swipeCard = document.querySelector(".swipe-card");

    swipeButton.addEventListener("click", function () {
        swipeCard.classList.add("swiped");
        setTimeout(() => {
            swipeCard.classList.remove("swiped");
        }, 1000); // Adjust the duration as needed
    });
});