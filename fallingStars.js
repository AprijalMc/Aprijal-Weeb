function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 1 + 1.5}s`; // Faster fall
    star.style.opacity = Math.random();
    document.getElementById('falling-stars').appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000); // Shorter lifespan
}

// Create more stars per interval
setInterval(() => {
    for (let i = 0; i < 5; i++) {
        createStar();
    }
}, 200);
