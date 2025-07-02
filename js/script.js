document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Eres mi sol en los días grises.",
        "Tu sonrisa es mi razón para ser feliz.",
        "Cada momento a tu lado es un regalo.",
        "Te amo más de lo que las palabras pueden expresar.",
        "Eres la mejor cosa que me ha pasado en la vida.",
        "Mi amor por ti crece cada día más.",
        "Eres mi todo."
    ];

    const messageElement = document.getElementById('message');
    const btn = document.getElementById('btn');

    let currentIndex = 0;

    btn.addEventListener('click', () => {
        if (currentIndex < messages.length) {
            messageElement.textContent = messages[currentIndex];
            currentIndex++;
        } else {
            alert("Gracias, amor mío, por regalarme un pedacito de tu tiempo tan valioso ❤️");
            btn.disabled = true; // Desactiva el botón para que no sigan los clics
        }
    });
});
