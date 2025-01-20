

document.addEventListener("DOMContentLoaded", () => {
    // Navbar Toggle
    const nav = document.querySelector('nav');
    const toggleAdd = document.getElementById('fa-add-icon'); // "+" button
    const toggleClose = document.getElementById('fa-times-icon'); // "X" button

    // Set Initial State
    toggleAdd.style.display = 'none';
    toggleClose.style.display = 'block';

    // Open Navbar
    toggleAdd.addEventListener('click', () => {
        nav.classList.remove('collapsed'); // Show navbar
        toggleAdd.style.display = 'none'; // Hide "+"
        toggleClose.style.display = 'block'; // Show "X"
    });

    // Close Navbar
    toggleClose.addEventListener('click', () => {
        nav.classList.add('collapsed'); // Hide navbar
        toggleAdd.style.display = 'block'; // Show "+"
        toggleClose.style.display = 'none'; // Hide "X"
    });

    // Particles.js Initialization
    particlesJS.load('particles-js', 'particles-config.json', function () {
        console.log('Particles.js loaded!');
    });

    // Typing Effect
    const typingText = document.getElementById("typing-text");
    const textContent = "Welcome!" + ' \xa0  ' + "I'm \xa0Stefanos.";
    let index = 0;

    function typeWriter() {
        if (index < textContent.length) {
            const span = document.createElement("span");
            span.textContent = textContent.charAt(index);
            span.style.animationDelay = `${index * 0.1}s`;
            span.classList.add("gradient-effect");
            typingText.appendChild(span);
            index++;
            setTimeout(typeWriter, 70);
        }
    }

    typeWriter();

    // Scroll-triggered Animation for Section Titles
    const sectionHeaders = document.querySelectorAll('section h1');

    // Intersection Observer for Titles
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.4 }); // Trigger when 40% of the header is visible

    sectionHeaders.forEach((header) => headerObserver.observe(header));

    // Back to Top Button
    const backToTopButton = document.getElementById("backToTop");

    // Show/Hide the Button on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block"; // Show button
        } else {
            backToTopButton.style.display = "none"; // Hide button
        }
    });

    // Smooth Scroll to Top on Button Click
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });


    // Pause/Play Animation for Showcase Texts on Scroll
    const showcaseTexts = document.querySelectorAll('.showcase-text');
    const showcaseObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running'; // Trigger animation
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    showcaseTexts.forEach((element) => {
        element.style.animationPlayState = 'paused'; // Pause until visible
        showcaseObserver.observe(element);
    });
});


// Create Cursor Dot
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
document.body.appendChild(cursorDot);

// Handle Cursor Movement
document.addEventListener('mousemove', (e) => {
    // Move Cursor Dot
    cursorDot.style.top = `${e.clientY}px`;
    cursorDot.style.left = `${e.clientX}px`;

    // Create Particle
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');
    particle.style.top = `${e.clientY}px`;
    particle.style.left = `${e.clientX}px`;

    document.body.appendChild(particle);

    // Remove Particle after Animation
    setTimeout(() => {
        particle.remove();
    }, 1000);
});



// document.addEventListener("DOMContentLoaded", () => {
//     const textElement = document.querySelector("#typing-about-text");
//     const originalHTML = textElement.innerHTML.trim(); // Get original content
//     const paragraphs = originalHTML.split("\n\n"); // Split into paragraphs
//     textElement.innerHTML = ""; // Clear the container for typewriter effect

//     let paragraphIndex = 0;
//     let charIndex = 0;

//     function typeWriter() {
//         if (paragraphIndex < paragraphs.length) {
//             const currentParagraph = paragraphs[paragraphIndex].trim();

//             if (charIndex < currentParagraph.length) {
//                 const visibleText = currentParagraph.substring(0, charIndex + 1);
//                 textElement.innerHTML =
//                     paragraphs
//                         .slice(0, paragraphIndex)
//                         .map((p) => `<p>${p}</p>`)
//                         .join("") + `<p>${visibleText}</p>`;
//                 charIndex++;
//                 setTimeout(typeWriter, 30); // Typing speed
//             } else {
//                 charIndex = 0;
//                 paragraphIndex++;
//                 setTimeout(typeWriter, 200); // Pause before next paragraph
//             }
//         } else {
//             textElement.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
//         }
//     }

//     typeWriter();
// });
