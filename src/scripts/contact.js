  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const url = 'https://script.google.com/macros/s/AKfycbyfQAZak3u_npVREBFyaz3yFEGvPshuciYDu76OMaLUEy0vTaXTKmzWwH-uLlVNk3qN/exec';
      const submitButton = document.getElementById("contact-submit");

      const success = document.querySelector('.contact').querySelector('.alert-success');
      const error = document.querySelector('.contact').querySelector('.alert-error');

      const date = document.querySelector("#contact-form").querySelector(".date")
      date.value = new Date().toISOString();

      submitButton.disabled = true;
      submitButton.innerHTML = contactForm.getAttribute('data-sending');

      const requestBody = new FormData(contactForm);

      try {
        await fetch(url, { method: 'POST', body: requestBody });

        contactForm.reset();

        error.setAttribute('aria-hidden', 'true');
        success.setAttribute('aria-hidden', 'false');
      }
      catch(e) {
        success.setAttribute('aria-hidden', 'true');
        error.setAttribute('aria-hidden', 'false');
      }

      submitButton.disabled = false;
      submitButton.innerHTML = contactForm.getAttribute('data-send');
    })
  })