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

// Local Storage

const contactForm = document.forms[0];
const formValues = {};
if (window.localStorage.getItem('userData')) {
  const formObject = JSON.parse(window.localStorage.getItem('userData'));
  contactForm.name.value = formObject.name;
  contactForm.email.value = formObject.email;
  contactForm.message.value = formObject.message;
}
function collectFormData() {
  formValues.name = contactForm.name.value;
  formValues.email = contactForm.email.value;
  formValues.message = contactForm.message.value;
  window.localStorage.setItem('userData', JSON.stringify(formValues));
}
contactForm.addEventListener('submit', collectFormData);
