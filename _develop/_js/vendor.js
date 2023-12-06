function reloadWindowResize() {
    window.onresize = function () {
        location.reload();
    }
}

function keyLock() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'PageDown' || e.key === 'PageUp' || e.key === 'Home' || e.key === 'End') {
            location.reload();
        }
    }, true);
}