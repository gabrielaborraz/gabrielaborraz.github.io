
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.getElementById("newsletter-form");

  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const url = 'https://script.google.com/macros/s/AKfycbwJdFVnGRrEbUzgip8eoaNZwLGT91kXYgKPdDpU-OOZZx2e6VuWMQqg5-bl82qJxqDegQ/exec';
    const submitButton = document.getElementById("newsletter-submit");

    const success = document.querySelector('.footer').querySelector('.alert-success');
    const error = document.querySelector('.footer').querySelector('.alert-error');

    const date = document.querySelector("#newsletter-form").querySelector(".date");
    date.value = new Date().toISOString();

    submitButton.disabled = true;
    submitButton.innerHTML = newsletterForm.getAttribute('data-sending');

    const requestBody = new FormData(newsletterForm);

    try {
      await fetch(url, { method: 'POST', body: requestBody });

      newsletterForm.reset();

      error.setAttribute('aria-hidden', 'true');
      success.setAttribute('aria-hidden', 'false');
    }
    catch(e) {
      success.setAttribute('aria-hidden', 'true');
      error.setAttribute('aria-hidden', 'false');
    }

    submitButton.disabled = false;
    submitButton.innerHTML = newsletterForm.getAttribute('data-send');
  })
});