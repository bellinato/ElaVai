document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const responseDiv = document.getElementById('response');
    const cadastroBtn = document.getElementById('cadastro-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = form.nome.value.trim();
        const senha = form.senha.value;

        // Verifica se os dados do cadastro estão salvos com a chave "cadastroData"
        const cadastroData = localStorage.getItem('cadastroData');
        if (!cadastroData) {
            responseDiv.textContent = 'Nenhum cadastro encontrado! Por favor, cadastre-se primeiro.';
            return;
        }

        const data = JSON.parse(cadastroData);
        if (data.nome === username && data.senha === senha) {
            responseDiv.textContent = 'Login realizado com sucesso!';
            setTimeout(function() {
                window.location.href = './home.html';
            }, 1000);
        } else {
            responseDiv.textContent = 'Nome de usuário ou senha incorretos.';
        }
    });

    cadastroBtn.addEventListener('click', function() {
        window.location.href = './cadastro.html';
    });
});