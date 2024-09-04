// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});
