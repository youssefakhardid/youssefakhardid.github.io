// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Typewriter Effect for Header
const typewriterText = "Youssef Akhardid";
let i = 0;
function typeWriter() {
    if (i < typewriterText.length) {
        document.getElementById("typewriter").innerHTML = typewriterText.substring(0, i + 1) + '<span>|</span>';
        i++;
        setTimeout(typeWriter, 100);
    } else {
        document.getElementById("typewriter").innerHTML = typewriterText;
    }
}
window.onload = typeWriter;