// 1. Efeito de Rolagem Suave (Smooth Scroll) ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o pulo brusco na tela
        
        const targetId = this.getAttribute('href'); // Pega o ID do destino (ex: #tropeirismo)
        const targetSection = document.querySelector(targetId);
        
        // Faz a tela rolar suavemente até a seção clicada
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Efeito Visual: Revelar as seções conforme o usuário rola a página (Scroll Animation)
const cards = document.querySelectorAll('.card');

const mostrarCardNoScroll = () => {
    const ativarSubida = window.innerHeight * 0.85; // Define o ponto de ativação na tela

    cards.forEach(card => {
        const cardTopo = card.getBoundingClientRect().top; // Mede a distância do card até o topo

        if (cardTopo < ativarSubida) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s ease-out';
        }
    });
};

// Configuração inicial para ocultar os cards antes do scroll
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)'; // Começam um pouco mais abaixo
});

// Dispara a função sempre que o usuário rolar a página
window.addEventListener('scroll', mostrarCardNoScroll);

// Dispara uma vez ao carregar a página para mostrar o primeiro card imediatamente
window.addEventListener('DOMContentLoaded', mostrarCardNoScroll);
