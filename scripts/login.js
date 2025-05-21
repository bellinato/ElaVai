document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const responseDiv = document.getElementById('response');
    const cadastroBtn = document.getElementById('cadastro-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = form.nome.value;
        const senha = form.senha.value;
        const cadastroData = localStorage.getItem('cadastroData');

        if (cadastroData) {
            const data = JSON.parse(cadastroData);
            if (data.nome === username && data.senha === senha) {
                responseDiv.textContent = 'Login realizado com sucesso!';
                // Redireciona para a página home onde está o modal
                window.location.href = './home.html';
            } else {
                responseDiv.textContent = 'Nome de usuário ou senha incorretos. Por favor, verifique seus dados ou faça o cadastro.';
            }
        } else {
            responseDiv.textContent = 'Nenhum cadastro encontrado! Por favor, cadastre-se primeiro.';
        }
    });

    cadastroBtn.addEventListener('click', function() {
        window.location.href = './cadastro.html';
    });
});