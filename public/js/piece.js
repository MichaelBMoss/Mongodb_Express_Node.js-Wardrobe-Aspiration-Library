function initialize() {
    const deleteButton = document.getElementById('delete-button');
    deleteButton.addEventListener('click', function(event) {
        window.location.href = `/piece/${event.currentTarget.getAttribute('pieceOwner')}/${event.currentTarget.getAttribute('pieceId')}/delete`;
      });
    };
  
  initialize();
  
  