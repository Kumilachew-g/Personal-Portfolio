const form = document.forms[0];
const email = form.elements[1];
const btn = document.querySelector('button[type=submit]');
const msg = document.querySelector('form > small');
btn.addEventListener('click', (event) => {
  const { value } = email;
  const lowerValue = value.toLowerCase();
  if (value !== lowerValue) {
    event.preventDefault();
    msg.style.color = '#f52f2f';
    msg.textContent = 'Please enter lowercase characters in the email field!';
  }
});
