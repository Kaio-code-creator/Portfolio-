function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    const themeButton = document.getElementById('themeToggle');
    if (body.classList.contains('dark-theme')) {
        themeButton.innerText = 'Tema Claro';
    } else {
        themeButton.innerText = 'Tema Escuro';
    }
}