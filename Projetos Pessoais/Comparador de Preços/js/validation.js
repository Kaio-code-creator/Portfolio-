document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        // Remove qualquer caractere que não seja número ou ponto
        this.value = this.value.replace(/[^0-9.]/g, '');
    });
});