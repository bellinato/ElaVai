document.addEventListener('DOMContentLoaded', function() {
    const clienteBtn = document.getElementById('cliente-btn');
    const motoristaBtn = document.getElementById('motorista-btn');

    clienteBtn.addEventListener('click', function() {
        // Redireciona para a página de cadastro do cliente
        window.location.href = './cadastrocliente.html';
    });

    motoristaBtn.addEventListener('click', function() {
        // Redireciona para a página de cadastro do motorista
        window.location.href = './cadastromotorista.html';
    });
});