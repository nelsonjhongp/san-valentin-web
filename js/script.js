let noClickCount = 0;

function handleNoClick() {
    const question = document.getElementById("question");
    const noButton = document.getElementById("no-btn");
    const gif = document.getElementById("reaction-gif");

    if (noClickCount === 0) {
        // Primera vez: cambia el título y muestra un GIF triste
        question.innerText = "¿Estás segura? 🥺";
        gif.src = "img/sad.gif";  // Agregar este GIF en la carpeta img
        gif.classList.remove("d-none");
    } else if (noClickCount === 1) {
        // Segunda vez: cambia el título y muestra un GIF enojado
        question.innerText = "No te lo permitiré! 😤";
        gif.src = "img/angry.gif";  // Otro GIF en la carpeta img
    } else {
        // A partir de la tercera vez, el botón se mueve aleatoriamente
        const randomX = Math.random() * 60 + "%";
        const randomY = Math.random() * 60 + "%";
        noButton.style.position = "absolute";
        noButton.style.left = randomX;
        noButton.style.top = randomY;
    }

    noClickCount++;
}

function acceptProposal() {
    document.getElementById("question").innerText = "¡Sabía que dirías que sí! ❤️";
    
    // Cambia el GIF a uno feliz
    const gif = document.getElementById("reaction-gif");
    gif.src = "img/happy.gif";  // Debes agregar este GIF en la carpeta img
    gif.classList.remove("d-none");

    // Cambia los botones a un enlace al álbum
    document.getElementById("buttons").innerHTML = `<a href="album.html" class="btn btn-primary">Ver nuestro álbum</a>`;
}
