const showFormButtonEl = document.getElementById('showFormButton');
const formContainerEl = document.getElementById('formContainer')

showFormButtonEl.addEventListener("click", function() {
    const formHeight = formContainerEl.scrollHeight;
    formContainerEl.style.height = formHeight + "px";
    showFormButtonEl.classList.add('hidden');
  });