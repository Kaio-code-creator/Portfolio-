document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', function() {
        // Permite apenas números, pontos e vírgulas
        this.value = this.value.replace(/[^0-9.,]/g, '');
    });
});
