function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Random start position (top of the sky)
    const startY = -80; // Start above the visible area
    const endY = window.innerHeight + 80; // End below the visible area

    star.style.setProperty('--startY', `${startY}px`);
    star.style.setProperty('--endY', `${endY}px`);

    // Random horizontal position
    star.style.left = `${Math.random() * window.innerWidth}px`;

    // Random animation delay
    star.style.animationDelay = `${Math.random() * 3}s`; // Up to 3 seconds delay

    document.querySelector('.sky').appendChild(star);

    // Remove star after animation (adjust timeout to match animation duration)
    setTimeout(() => {
        star.remove();
    }, 2000); // 2 seconds
}

setInterval(createShootingStar, 200); // Create stars regularly (adjust interval)

