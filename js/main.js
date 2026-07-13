async function cargarComponente(idContenedor, archivoHTML) {
    try {
        const respuesta = await fetch(archivoHTML);
        if (!respuesta.ok) throw new Error(`No se pudo cargar ${archivoHTML}`);
        const html = await respuesta.text();
        document.getElementById(idContenedor).innerHTML = html;
    } catch (error) {
        console.error("Error cargando el componente:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarComponente("global-header", "components/header.html");
    cargarComponente("global-footer", "components/footer.html");
});


// Dentro de tu archivo js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.faq-trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.parentElement;
            
            // Cierra otros acordeones para mantener el orden
            document.querySelectorAll('.faq-item').forEach(i => {
                if(i !== item) i.classList.remove('active');
            });
            
            // Alterna el actual
            item.classList.toggle('active');
        });
    });
});
