document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o mapa de Pompeia-SP usando Leaflet
    const pompeia = [-22.1083, -50.7406]; // Coordenadas de Pompeia-SP
    const map = L.map('map-container').setView(pompeia, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker(pompeia).addTo(map)
        .bindPopup('Pompeia, SP')
        .openPopup();

    // Solicitação de corrida
    const rideStatus = document.getElementById('rideStatus');
    const acceptBtn = document.getElementById('acceptBtn');
    const rejectBtn = document.getElementById('rejectBtn');
    setTimeout(() => {
        rideStatus.textContent = 'Nova corrida solicitada: Cliente próximo.';
    }, 3000);
    acceptBtn.addEventListener('click', function() {
        rideStatus.textContent = 'Corrida aceita. Iniciando navegação...';
    });
    rejectBtn.addEventListener('click', function() {
        rideStatus.textContent = 'Corrida recusada.';
    });

    // Navegação até o destino
    const startNavBtn = document.getElementById('startNavBtn');
    if (startNavBtn) {
        startNavBtn.addEventListener('click', function() {
            rideStatus.textContent = 'Navegação iniciada...';
        });
    }

    // Chat estilo WhatsApp/Messenger
    const openChatBtn = document.getElementById('openChatBtn');
    const chatModal = document.getElementById('chatModal');
    const closeChat = document.getElementById('closeChat');
    const chatWindow = document.getElementById('chatWindow');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');

    openChatBtn.addEventListener('click', () => {
        chatModal.classList.add('active');
        chatInput.focus();
    });
    closeChat.addEventListener('click', () => {
        chatModal.classList.remove('active');
    });

    // Simulação de mensagens individuais
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = chatInput.value.trim();
        if (message !== '') {
            addMessage('motorista', message);
            chatInput.value = '';
            chatWindow.scrollTop = chatWindow.scrollHeight;
            // Simula resposta da cliente após 1s
            setTimeout(() => {
                addMessage('cliente', 'Mensagem recebida! (simulação)');
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

    // Modal do perfil
    const profileBtn = document.getElementById('profileBtn');
    const profileModal = document.getElementById('profileModal');
    const closeModal = document.querySelector('.modal .close');
    profileBtn.addEventListener('click', function() {
        profileModal.style.display = 'flex';
    });
    closeModal.addEventListener('click', function() {
        profileModal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === profileModal) {
            profileModal.style.display = 'none';
        }
    });

    const form = document.getElementById('loginMotoristaForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = form.nome.value.trim();
        const senha = form.senha.value;
        
        const cadastroData = localStorage.getItem('motoristaData');
        if (!cadastroData) {
            responseDiv.textContent = 'Nenhum cadastro encontrado! Por favor, cadastre-se primeiro.';
            return;
        }
        const data = JSON.parse(cadastroData);
        if (data.nome === username && data.senha === senha) {
            responseDiv.textContent = 'Login realizado com sucesso!';
            setTimeout(function() {
                window.location.href = './homemotorista.html';
            }, 1000);
        } else {
            responseDiv.textContent = 'Nome de usuário ou senha incorretos.';
        }
    });
});