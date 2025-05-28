document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de contatos iniciais
    const contatos = [
        { id: 1, nome: "Ana Paula", avatar: "AP" },
        { id: 2, nome: "Juliana Silva", avatar: "JS" },
        { id: 3, nome: "Maria Souza", avatar: "MS" }
    ];

    // Mensagens simuladas por contato
    const mensagens = {
        1: [ {sender: 'cliente', text: 'Olá, motorista!'}, {sender: 'motorista', text: 'Olá, Ana!'} ],
        2: [ {sender: 'cliente', text: 'Boa tarde!'}, {sender: 'motorista', text: 'Boa tarde, Juliana!'} ],
        3: [ {sender: 'cliente', text: 'Já estou no local.'} ]
    };

    let contatoAtual = null;

    const contactsList = document.getElementById('contactsList');
    const chatWindow = document.getElementById('chatWindow');
    const chatHeader = document.getElementById('chatWith');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');

    // Função para adicionar um contato na lista
    function adicionarContato(contato) {
        // Evita duplicidade
        if (document.querySelector(`.contact[data-id="${contato.id}"]`)) return;
        contatos.push(contato);
        const div = document.createElement('div');
        div.className = 'contact';
        div.dataset.id = contato.id;
        div.innerHTML = `<div class="contact-avatar">${contato.avatar}</div>
                         <div class="contact-info">
                            <div class="contact-name">${contato.nome}</div>
                         </div>`;
        div.addEventListener('click', () => abrirConversa(contato));
        contactsList.appendChild(div);
    }

    // Renderiza contatos iniciais
    contatos.forEach(adicionarContato);

    function abrirConversa(contato) {
        contatoAtual = contato.id;
        document.querySelectorAll('.contact').forEach(c => c.classList.remove('active'));
        document.querySelector(`.contact[data-id="${contato.id}"]`).classList.add('active');
        chatHeader.textContent = contato.nome;
        chatForm.style.display = '';
        chatWindow.innerHTML = '';
        (mensagens[contato.id] || []).forEach(msg => addMessage(msg.sender, msg.text));
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!contatoAtual) return;
        const message = chatInput.value.trim();
        if (message !== '') {
            addMessage('motorista', message);
            if (!mensagens[contatoAtual]) mensagens[contatoAtual] = [];
            mensagens[contatoAtual].push({sender: 'motorista', text: message});
            chatInput.value = '';
            chatWindow.scrollTop = chatWindow.scrollHeight;
            setTimeout(() => {
                const resposta = 'Mensagem recebida! (simulação)';
                addMessage('cliente', resposta);
                mensagens[contatoAtual].push({sender: 'cliente', text: resposta});
                chatWindow.scrollTop = chatWindow.scrollHeight;
            }, 1000);
        }
    });

    function addMessage(sender, text) {
        const msgElem = document.createElement('div');
        msgElem.className = 'msg ' + sender;
        msgElem.textContent = text;
        chatWindow.appendChild(msgElem);
    }

    // Exemplo: adicionar novo cliente automaticamente após 5 segundos
    setTimeout(() => {
        const novoCliente = { id: 4, nome: "Carla Nova", avatar: "CN" };
        adicionarContato(novoCliente);
        mensagens[4] = [ {sender: 'cliente', text: 'Olá, sou nova cliente!'} ];
    }, 5000);
});