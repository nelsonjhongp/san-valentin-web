function moveNoButton() {
    const noButton = document.getElementById("no-btn");
    const randomX = Math.random() * 150 + "%";
    const randomY = Math.random() * 150 + "%";
    noButton.style.left = randomX;
    noButton.style.top = randomY;
}

function acceptProposal() {
    document.getElementById("question").innerText = "¡Sabía que dirías que sí! ❤️";
    document.getElementById("buttons").innerHTML = `<a href="album.html" class="btn btn-primary">Ver nuestro álbum</a>`;
}
