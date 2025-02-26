// Generar corazones en posiciones aleatorias
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    let xPos = Math.random() * window.innerWidth; // Posición en X
    let yPos = Math.random() * window.innerHeight; // Posición en Y
    let size = Math.random() * 20 + 15; // Tamaño aleatorio entre 15px y 35px

    heart.style.left = `${xPos}px`;
    heart.style.top = `${yPos}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones constantemente
setInterval(createHeart, 150);

// Evento del botón "Ver Regalo"
document.getElementById("verRegalo").addEventListener("click", function () {
    let count = 0;
    let content = document.getElementById("content");
    let giftCard = document.getElementById("giftCard");

    // Desvanecer texto y botón
    content.style.opacity = "0";

    let interval = setInterval(() => {
        createHeart();
        count++;

        if (count >= 150) { // Aumentamos la cantidad para llenar la pantalla
            clearInterval(interval);
            setTimeout(() => {
                giftCard.style.display = "block";
                giftCard.style.opacity = "1";
            }, 2000);
        }
    }, 20); // Aumentamos la frecuencia para que se llenen más rápido
});
