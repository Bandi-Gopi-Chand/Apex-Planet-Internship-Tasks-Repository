// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});


// Active Navbar Link Highlight

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.style.color = "white";

        if (link.getAttribute("href").includes(current)) {

            link.style.color = "#00c6ff";

        }

    });

});