// Cria um novo elemento de botão
const novoBotao = document.createElement('button');

// Define o texto do botão
novoBotao.textContent = 'Clique para adicionar';

// Adiciona um ouvinte de eventos de clique
novoBotao.addEventListener('click', function() {
    alert('+'); // Exibe uma mensagem ao clicar
});

// Adiciona o botão ao corpo do documento HTML
document.body.appendChild(novoBotao);
