document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginMotoristaForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = form.nome.value.trim();
        const senha = form.senha.value;

        // Recupera os dados do cadastro do motorista salvos na chave "motoristaData"
        const cadastroData = localStorage.getItem('motoristaData');
        if (!cadastroData) {
            responseDiv.textContent = 'Nenhum cadastro encontrado! Por favor, cadastre-se primeiro.';
            return;
        }

        const data = JSON.parse(cadastroData);
        if (data.nome === username && data.senha === senha) {
            responseDiv.textContent = 'Login realizado com sucesso!';
            setTimeout(function() {
                // Redireciona para a página homemotorista
                window.location.href = './homemotorista.html';
            }, 1000);
        } else {
            responseDiv.textContent = 'Nome de usuário ou senha incorretos.';
        }
    });

    const motoristaBtn = document.getElementById('motorista-btn');
    motoristaBtn.addEventListener('click', function() {
        // Redireciona para o cadastro do motorista
        window.location.href = './cadastromotorista.html';
    });
});