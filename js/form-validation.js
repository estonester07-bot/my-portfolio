// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
      el.textContent = '';
    });
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
      document.getElementById('name-error').textContent = 'Name is required';
      isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number starting with 0';
      isValid = false;
    }
    
    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
      document.getElementById('message-error').textContent = 'Message is required';
      isValid = false;
    }
    
    if (isValid) {
      // Form is valid, submit it
      alert('Thank you for your message!');
      this.reset();
    }
  });
}

// Survey Form Validation
const surveyForm = document.getElementById('surveyForm');
if (surveyForm) {
  surveyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Email validation
    const email = document.getElementById('survey-email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    // Rating validation
    const rating = document.getElementById('rating').value;
    if (rating === '') {
      alert('Please select a rating');
      return false;
    }
    
    // Form is valid, submit it
    alert('Thank you for your feedback!');
    this.reset();
    return true;
  });
}