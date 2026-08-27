document.querySelector('.game-container').addEventListener('click', (e) => {
    if (e.target.id) {
        window.location.href = `../games/${e.target.id}`;
    }
});