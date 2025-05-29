document.addEventListener('DOMContentLoaded', function() {
    const clienteBtn = document.getElementById('cliente-btn');
    const motoristaBtn = document.getElementById('motorista-btn');

    clienteBtn.addEventListener('click', function() {
        // Redireciona para a página do cliente
        window.location.href = './cliente.html';
    });

    motoristaBtn.addEventListener('click', function() {
        // Redireciona diretamente para a página do motorista
        window.location.href = './motorista.html';
    });
});
