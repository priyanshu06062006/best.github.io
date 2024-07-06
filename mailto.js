document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('.field.name input').value;
    const email = document.querySelector('.field.email input').value;
    const subject = document.querySelector('.field input[placeholder="Subject"]').value;
    const message = document.querySelector('.field.textarea textarea').value;
    
    const mailtoLink = `mailto:priyanshukhatridk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
  });