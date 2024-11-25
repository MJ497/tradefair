document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("navbar-toggle");
    const navbarMenu = document.getElementById("navbar-menu");

    // Toggle menu visibility
    toggleButton.addEventListener("click", () => {
        if (navbarMenu.classList.contains("show")) {
            navbarMenu.classList.remove("show");
            navbarMenu.classList.add("hide");
            toggleButton.innerHTML = "<i class='bx bx-menu'></i>"; // Change to menu icon
        } else {
            navbarMenu.classList.remove("hide");
            navbarMenu.classList.add("show");
            toggleButton.innerHTML = "<i class='bx bx-x' style='color:black'></i>"; // Change to close icon
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active"); // Hide current slide
        currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
        slides[currentIndex].classList.add("active"); // Show next slide
    }

    // Change slides every 5 seconds
    setInterval(showNextSlide, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("registerModal");
    const openModalBtn = document.querySelector(".bt2");
    const closeModalBtn = document.querySelector(".close");

    // Show the modal when the button is clicked
    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
    });

    // Hide the modal when the close button is clicked
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Hide the modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Add form submission behavior
    const form = document.getElementById("register-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for registering!");
        modal.style.display = "none";
        form.reset();
    });
});
