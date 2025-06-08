document.addEventListener('DOMContentLoaded', () => {
    // Sistema "apri/chiudi" per le materie
    const subjects = document.querySelectorAll('.subject');
    
    subjects.forEach(subject => {
        const header = subject.querySelector('.subject-header');
        const content = subject.querySelector('.subject-content');
        const arrow = subject.querySelector('.arrow');
        
        header.addEventListener('click', () => {
            // Chiudi tutti gli altri
            subjects.forEach(other => {
                if (other !== subject) {
                    other.querySelector('.subject-content').style.maxHeight = null;
                    other.querySelector('.arrow').textContent = '▶';
                }
            });
            
            // Apri/chiudi questo
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.textContent = '▶';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                arrow.textContent = '▼';
            }
        });
    });
});
