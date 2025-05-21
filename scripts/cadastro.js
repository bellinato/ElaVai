document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const cadastroData = {
            nome: form.nome.value,
            email: form.email.value,
            senha: form.senha.value,
            telefone: form.telefone.value
        };

        // Salva as informações no localStorage
        localStorage.setItem('cadastroData', JSON.stringify(cadastroData));

        // Limpa o formulário
        form.reset();

        // Exibe uma mensagem de sucesso e redireciona para o login
        responseDiv.textContent = 'Cadastro realizado com sucesso! Redirecionando para login...';
        setTimeout(function() {
            window.location.href = './login.html';
        }, 2000); // Redireciona após 2 segundos
    });

    const loginBtn = document.getElementById('login-btn');
    
    loginBtn.addEventListener('click', function() {
        window.location.href = './login.html';
    });
});