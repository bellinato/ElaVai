document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroMotoristaForm');
    const responseDiv = document.getElementById('response');
    const irLoginBtn = document.getElementById('irLoginBtn');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const motoristaData = {
                nome: form.nome.value.trim(),
                email: form.email.value.trim(),
                telefone: form.telefone.value.trim(),
                senha: form.senha.value
            };
            // Salva os dados na chave "motoristaData"
            localStorage.setItem('motoristaData', JSON.stringify(motoristaData));
            form.reset();
            responseDiv.textContent = 'Cadastro realizado com sucesso! Redirecionando para o login...';
            setTimeout(function() {
                // Redireciona para o login do motorista
                window.location.href = './loginmotorista.html';
            }, 2000);
        });
    }

    if (irLoginBtn) {
        irLoginBtn.addEventListener('click', function() {
            window.location.href = './loginmotorista.html';
        });
    }
});