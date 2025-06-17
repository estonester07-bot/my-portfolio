// Set current year in footer
document.querySelectorAll('#current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
  
  // Time-based greeting
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) greeting = "Good morning!";
    else if (hour < 18) greeting = "Good afternoon!";
    else greeting = "Good evening!";
    
    greetingElement.textContent = greeting;
  }
  
  // Dark/Light mode toggle
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  
  // Check for saved theme preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
  
  // Highlight active nav link
  document.querySelectorAll('.navbar a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });