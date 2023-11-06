function initialize() {
  console.log('js is working');
  pieceDivClickable();
  profilePicDivClickable()
};

function pieceDivClickable() {
  const pieceDivEls = document.querySelectorAll('.piece-div');
  for (let div of pieceDivEls) {
    div.addEventListener('click', function(event) {
      window.location.href = `/piece/${event.currentTarget.getAttribute('user')}/${event.currentTarget.getAttribute('id')}`;
    });
  };
}

function profilePicDivClickable() {
  const profilePicDivEl = document.getElementById('profile-pic-div');
  const curUserId = profilePicDivEl.getAttribute('curUserId');
  const viewedUserId = profilePicDivEl.getAttribute('viewedUserId');
  if (curUserId == viewedUserId) {
    profilePicDivEl.classList.add('pointer');
    profilePicDivEl.addEventListener('click', function(event) {
      window.location.href = `/profile/${curUserId}/showEdit`;
    });
  }
}

initialize();

