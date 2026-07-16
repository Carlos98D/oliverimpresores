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

// imagenes zoom estaticas tres


const modal = document.getElementById("modal");
const fullImage = document.getElementById("full-image");
const closeBtn = document.querySelector(".close");

// Abrir zoom al hacer clic
document.querySelectorAll(".zoomable").forEach(img => {
  img.onclick = function() {
    modal.style.display = "flex";
    fullImage.src = this.src;
  }
});

// Cerrar al hacer clic en la X o fuera de la imagen
closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; }

