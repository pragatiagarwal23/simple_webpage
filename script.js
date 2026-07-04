// --- Nav active link on click ---
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});

// --- Form submission ---
const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = nameInput.value.trim();

  // Clear previous message
  formMsg.textContent = '';
  formMsg.className = 'form-msg';

  if (!value) {
    formMsg.textContent = 'Please enter your name.';
    formMsg.classList.add('error');
    nameInput.focus();
    return;
  }

  // Success
  formMsg.textContent = 'Thanks, ' + value + '! Your message was received.';
  formMsg.classList.add('success');
  nameInput.value = '';
});