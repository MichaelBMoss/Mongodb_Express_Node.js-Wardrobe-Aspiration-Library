function handleClick(clickedDiv) {
    const pieceOwner = clickedDiv.getAttribute('pieceOwner');
    const pieceId = clickedDiv.getAttribute('pieceId')
    console.log(pieceOwner)
    console.log(pieceId)
    window.location.href = `/piece/${pieceOwner}/${pieceId}`
};