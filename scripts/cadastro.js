document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroMotoristaForm');
    const responseDiv = document.getElementById('response');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Cria o objeto de cadastro com os mesmos nomes esperados
            const motoristaData = {
                nome: form.nome.value.trim(),
                email: form.email.value.trim(),
                telefone: form.telefone.value.trim(),
                senha: form.senha.value
            };

            // Salva os dados do motorista no localStorage usando a chave "motoristaData"
            localStorage.setItem('motoristaData', JSON.stringify(motoristaData));

            // Limpa o formulário e exibe uma mensagem de sucesso
            form.reset();
            responseDiv.textContent = 'Cadastro realizado com sucesso! Redirecionando para o login...';
            setTimeout(function() {
                // Redireciona para a página de login do motorista
                window.location.href = './loginmotoista.html';
            }, 2000);
        });
    }
});