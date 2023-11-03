const showFormButtonEl = document.getElementById('showFormButton');
const formContainerEl = document.getElementById('formContainer')
const closeFormButtonEl = document.getElementById('closeFormButton')

showFormButtonEl.addEventListener("click", function() {
    const formHeight = formContainerEl.scrollHeight;
    formContainerEl.style.height = formHeight + "px";
    showFormButtonEl.classList.add('hidden');
  });

  closeFormButtonEl.addEventListener("click", function() {
    formContainerEl.style.height = "0px";
    showFormButtonEl.classList.remove('hidden');
});