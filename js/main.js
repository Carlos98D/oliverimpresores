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

