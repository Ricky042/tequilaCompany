// Add smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animations for sections
const sections = document.querySelectorAll('.home-section, .about-section, .products-section, .contact-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Modal for product details
const modal = document.getElementById("modal");
const modalDetails = document.getElementById("modal-details");

function openModal(product) {
    modal.style.display = "block";
    let details = '';

    if (product === 'blanco') {
        details = `
            <h2>Tequila Blanco</h2>
            <p>A smooth, fresh tequila with citrus and pepper notes. Perfect for cocktails or sipping straight.</p>
            <img src="tequila-blanco.jpg" alt="Tequila Blanco">
        `;
    } else if (product === 'reposado') {
        details = `
            <h2>Tequila Reposado</h2>
            <p>Aged to perfection, offering a balance of oak and agave flavors. Ideal for a refined tasting experience.</p>
            <img src="tequila-reposado.jpg" alt="Tequila Reposado">
        `;
