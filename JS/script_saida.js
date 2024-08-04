function confirmarSaida(event) {
    if (!confirm("Sua conta será deslogada!!")) {
        event.preventDefault(); // Impede a navegação
    }
}