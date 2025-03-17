document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault(); // Prevents the page from scrolling
        const currentPage = window.location.pathname;
        if (currentPage.includes("index.html")) {
            window.location.href = "invert.html";
        } else {
            window.location.href = "index.html";
        }
    }
});

$(document).ready(function () {
    // Make text elements draggable
    $(".text, .text2, .text3, .text4, .text5, .text6").draggable().hide();

    // Function to handle section click
    $(".section, .section2, .section3, .section4, .section5, .section6").click(function () {
        let sectionClass = $(this).attr("class"); // Get the clicked section's class
        let textClass = sectionClass.replace("section", "text"); // Find corresponding text class

        // Show the corresponding text and keep others visible
        $("." + textClass).fadeIn().draggable();
    });
});

$(document).ready(function () {
    $(".section7").click(function () {
        window.location.href = "index.html"; // Redirect to index.html
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if the current page is 'invert.html'
    if (window.location.pathname.includes("invert.html")) {
        const sections = document.querySelectorAll(".section, .section2, .section3, .section4, .section5, .section6, .section7");

        sections.forEach(section => {
            let randomTop = Math.floor(Math.random() * (window.innerHeight - 150)); // Keep within height
            let randomLeft = Math.floor(Math.random() * (window.innerWidth - 300)); // Keep within width

            section.style.top = `${randomTop}px`;
            section.style.left = `${randomLeft}px`;
        });
    }
});