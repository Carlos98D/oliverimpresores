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