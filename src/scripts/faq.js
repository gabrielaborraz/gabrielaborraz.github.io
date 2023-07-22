const handleClickFaq = (e) => {
  const faqButton = e.srcElement;
  const answerContent = document.querySelectorAll(`[aria-labelledby="${faqButton.id}"]`)[0];

  const expanded = faqButton.getAttribute('aria-expanded') === 'true';

  // Toggle button
  faqButton.setAttribute('aria-expanded', (!expanded).toString());

  // Toggle content
  answerContent.toggleAttribute('hidden', expanded);
}

const setDefaults = (faqButton) => {
  const answerContent = document.querySelectorAll(`[aria-labelledby="${faqButton.id}"]`)[0];

  faqButton.setAttribute('aria-expanded', 'false');
  answerContent.setAttribute('hidden', true);
}

const attachClickEvent = (faqButton) => {
  if (faqButton.tagName === 'BUTTON') {
    setDefaults(faqButton);
    faqButton.addEventListener('click', handleClickFaq, false);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = Array.from(document.querySelectorAll('.faq-question button'));

  if(faqButtons.length) {
    faqButtons.forEach(attachClickEvent);
  }
});