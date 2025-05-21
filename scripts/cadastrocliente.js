document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroClienteForm');
    const loginForm = document.getElementById('loginForm');
    const responseDiv = document.getElementById('response');
    const cadastroBtn = document.getElementById('cadastro-btn');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Cria o objeto de cadastro com os mesmos nomes esperados no login
            const cadastroData = {
                nome: cadastroForm.nome.value.trim(),
                senha: cadastroForm.senha.value,  // Certifique-se de que o campo "senha" existe
                email: cadastroForm.email.value.trim() // Se desejar salvar email também
            };

            // Salva os dados usando a chave "cadastroData"
            localStorage.setItem('cadastroData', JSON.stringify(cadastroData));

            // Opcional: limpa o formulário e exibe uma mensagem
            cadastroForm.reset();
            responseDiv.textContent = 'Cadastro realizado com sucesso! Redirecionando para login...';
            setTimeout(function() {
                window.location.href = './login.html';
            }, 2000);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = loginForm.nome.value;
            const senha = loginForm.senha.value;

            // Verifica se os dados do cliente estão salvos no localStorage
            const clienteData = localStorage.getItem('clienteData');

            if (clienteData) {
                const data = JSON.parse(clienteData);
                if (data.nome === username && data.senha === senha) {
                    responseDiv.textContent = 'Login realizado com sucesso!';
                    setTimeout(function() {
                        // Redireciona para a página inicial do cliente, por exemplo:
                        window.location.href = './cliente_home.html';
                    }, 1000);
                } else {
                    responseDiv.textContent = 'Nome de usuário ou senha incorretos.';
                }
            } else {
                responseDiv.textContent = 'Nenhum cadastro encontrado! Faça o cadastro primeiro.';
            }
        });
    }

    if (cadastroBtn) {
        cadastroBtn.addEventListener('click', function() {
            window.location.href = './cadastrocliente.html';
        });
    }
});