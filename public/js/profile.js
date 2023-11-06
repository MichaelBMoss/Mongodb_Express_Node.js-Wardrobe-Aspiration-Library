function initialize() {
  console.log('js is working');
  const pieceDivEls = document.querySelectorAll('.piece-div');
  for (let div of pieceDivEls) {
    div.addEventListener('click', function(event) {
      window.location.href = `/piece/${event.currentTarget.getAttribute('user')}/${event.currentTarget.getAttribute('id')}`;
    });
  };
};

initialize();

