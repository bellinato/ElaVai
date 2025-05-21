document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroMotoristaForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const motoristaData = {
            nome: form.nome.value,
            email: form.email.value,
            telefone: form.telefone.value,
            senha: form.senha.value,
        };

        // Salva os dados do motorista no localStorage
        localStorage.setItem('motoristaData', JSON.stringify(motoristaData));

        // Limpa o formulário
        form.reset();

        // Exibe mensagem de sucesso e redireciona para a página de login
        responseDiv.textContent = 'Cadastro realizado com sucesso! Redirecionando para login...';
        setTimeout(function() {
            window.location.href = './loginmotorista.html';
        }, 2000);
    });
});