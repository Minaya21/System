document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "No sé si crees en la suerte… pero desde que te conocí, la mía cambió por completo.",
        "Si las estrellas hablaran, seguro contarían cómo me pierdo en tu sonrisa cada noche.",
        "No eres canción, pero desde que apareciste… mi corazón tiene un nuevo ritmo.",
        "Eres como un atardecer en la playa: imposible de ignorar, imposible de olvidar.",
        "No busco mil amores. Solo quiero uno… que se parezca a ti.",
        "Helian Rosiwar Herrera Alonso… si tu nombre fuera un verso, yo lo repetiría en todos mis poemas.",
        "No vine a impresionarte. Vine a mostrarte lo que se siente cuando alguien de verdad quiere conocerte."
    ];

    const messageElement = document.getElementById('message');
    const btn = document.getElementById('btn');

    let currentIndex = 0;

    btn.addEventListener('click', () => {
        if (currentIndex < messages.length) {
            messageElement.textContent = messages[currentIndex];
            currentIndex++;
        } else {
            alert("Gracias, por regalarme un pedacito de tu tiempo tan valioso ❤️");
            btn.disabled = true; // Desactiva el botón para que no sigan los clics
        }
    });
});
