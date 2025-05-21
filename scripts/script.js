document.addEventListener('DOMContentLoaded', function() {
    const checkboxEl = document.getElementById('checkbox');
    const nextBtn   = document.getElementById('next-btn');
    const form = document.getElementById('cadastroForm');
    const responseDiv = document.getElementById('response');
    const loginBtn = document.getElementById('login-btn');

    checkboxEl.addEventListener('change', function() {
        nextBtn.disabled = !checkboxEl.checked;
    });

    nextBtn.addEventListener('click', function() {
        // Redireciona para a página de cadastro
        window.location.href = './motorista_e_cliente.html';
    });

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

        // Exibe uma mensagem de sucesso
        responseDiv.textContent = 'Cadastro realizado com sucesso!';
    });

    loginBtn.addEventListener('click', function() {
        // Redireciona para a página de login
        window.location.href = './login.html';
    });

    // Se houver o botão no index
    const proceedBtn = document.getElementById('proceed-btn');
    if (proceedBtn) {
        proceedBtn.addEventListener('click', function() {
            window.location.href = './motorista e cliente.html';
        });
    }
});