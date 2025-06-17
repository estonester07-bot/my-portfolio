// Project Details Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const projectCard = this.closest('.project-card');
        const details = projectCard.querySelector('.project-desc');
        
        details.classList.toggle('hidden');
        this.textContent = details.classList.contains('hidden') ? 'View Details' : 'Hide Details';
      });
    });
  });