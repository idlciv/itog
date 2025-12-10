document.addEventListener('DOMContentLoaded', function() {
     const button = document.querySelector('.buttonnav');
     if (button) {
                const originalText = button.textContent;
        
                button.addEventListener('mouseenter', function() {
            this.textContent = 'Хочешь туда?';
        });
        
         }
});