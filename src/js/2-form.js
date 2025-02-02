const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

if (form) {
  form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  const feedbackFormStateString = localStorage.getItem('feedback-form-state');
  const feedbackFormStates = JSON.parse(feedbackFormStateString);

  if (feedbackFormStateString !== null) {
    formData.email = feedbackFormStates.email;
    formData.message = feedbackFormStates.message;
    form.elements.email.value = feedbackFormStates.email;
    form.elements.message.value = feedbackFormStates.message;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (emailValue === '' || messageValue === '') {
      alert('Fill please all fields');
    } else {
      console.log(formData);
      form.reset();
      localStorage.removeItem('feedback-form-state');
      formData.email = '';
      formData.message = '';
    }
  });
}
