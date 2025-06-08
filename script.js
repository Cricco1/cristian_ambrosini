document.addEventListener('DOMContentLoaded', () => {
    // Gestione dei pannelli delle materie
    const subjectsContainer = document.querySelector('.subjects');
    
    subjectsContainer.addEventListener('click', (e) => {
        const subjectCard = e.target.closest('.subject');
        if (!subjectCard) return;
        
        const subjectContent = subjectCard.querySelector('.subject-content');
        const isOpen = subjectContent.style.maxHeight;
        
        // Chiudi tutti gli altri pannelli
        document.querySelectorAll('.subject-content').forEach(content => {
            if (content !== subjectContent) {
                content.style.maxHeight = null;
                content.previousElementSibling.querySelector('.arrow').textContent = '▶';
            }
        });
        
        // Apri/chiudi il pannello corrente
        if (!isOpen) {
            subjectContent.style.maxHeight = subjectContent.scrollHeight + 'px';
            subjectCard.querySelector('.arrow').textContent = '▼';
        } else {
            subjectContent.style.maxHeight = null;
            subjectCard.querySelector('.arrow').textContent = '▶';
        }
    });
    
    // Animazione smooth per i pannelli
    const style = document.createElement('style');
    style.textContent = `
        .subject-content {
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
    `;
    document.head.appendChild(style);
});
