document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    if (!button) return;

    button.addEventListener('click', () => {
        button.textContent = 'Clicked!';
        button.disabled = true;
        button.style.opacity = '0.9';
        button.style.transform = 'scale(0.98)';
    });
});
