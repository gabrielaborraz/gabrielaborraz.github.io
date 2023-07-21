const handleClickFaq = (element) => {
  element.classList.toggle('faq-question-open');

  const answer = element.parentElement.nextElementSibling;
  answer.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = Array.from(document.getElementsByClassName('faq-question'));

  if(faqButtons.length) {
    faqButtons.forEach((faqButton) => {
      faqButton.addEventListener('click', () => {
        handleClickFaq(faqButton);
      })
    });
  }
});