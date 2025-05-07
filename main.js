window.onload = () => {
    const letters = document.querySelectorAll(".word span");
    const isMobile = window.innerWidth <= 768; // Detectar si es móvil

    if (!isMobile) {
        // 1. Aparecen letra por letra (solo en escritorio)
        gsap.to(letters, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "sine.inOut",
            stagger: 0.1,
        });

        // 2. Después de que aparecen, esperamos un momento
        setTimeout(() => {
            // 3. Desaparecen letra por letra en reversa
            gsap.to(letters, {
                opacity: 0,
                y: -20,
                duration: 0.8,
                ease: "sine.inOut",
                stagger: {
                    each: 0.1,
                    from: "end",
                },
            });

            // 4. Luego se desvanece todo el preload y entra el contenido
            setTimeout(() => {
                gsap.to("#preload", {
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 2,
                    ease: "sine.inOut",
                    onComplete: () => {
                        document.getElementById("preload").style.display = "none";
                    },
                });

                // Mostrar el contenido un poco antes de que termine el fade del preload
                setTimeout(() => {
                    document.getElementById("content").classList.remove("hidden");
                    gsap.to("#content", {
                        opacity: 1,
                        duration: 2,
                        ease: "sine.inOut",
                    });
                }, 1000);
            }, 1000); // Espera para que la animación de desaparición se vea
        }, 2000); // Tiempo después de que aparecieron todas las letras
    } else {
        // En móvil, ocultar directamente el preload y mostrar el contenido
        document.getElementById("preload").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
        gsap.to("#content", {
            opacity: 1,
            duration: 2,
            ease: "sine.inOut",
        });
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los spans dentro de .texto-animado
    const palabra = document.querySelectorAll('.texto-animado span');

    // Animamos cada letra con GSAP
    gsap.to(palabra, {
        opacity: 1,
        scale: 0.5,
        duration: 1,
        stagger: 0.1, // Retraso entre cada letra
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth <= 768; // Detectar si es móvil
    const delayTime = isMobile ? 0.5 : 3.5; // Reducir el retraso en móvil a 0.5 segundos (3 segundos antes)

    // Animación para el párrafo
    gsap.to(".parrafo-animado", {
        duration: 2,
        opacity: 1,
        y: -20,
        ease: "sine.inOut",
        delay: delayTime, // Aplica el retraso dinámico
    });
});

function actualizarHora() {
    const elementoHora = document.getElementById('hora');
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString(); // Formato de hora local
    elementoHora.textContent = hora;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);

// Mostrar la hora inmediatamente al cargar la página
actualizarHora();


