// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu visibility for mobile
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
});

// Display a modal window on button click
const contactBtn = document.getElementById('b2');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Contact Form</h2>
        <p>Here you can put your contact form or any information you want to display.</p>
    </div>
`;
document.body.appendChild(modal);

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

