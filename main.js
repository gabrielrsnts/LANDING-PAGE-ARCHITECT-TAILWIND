document.addEventListener('DOMContentLoaded', () => {
    const customImageModal = document.getElementById('custom-image-modal');
    const modalImageContent = document.getElementById('modal-image-content');
    const closeImageModalButton = document.getElementById('close-image-modal');
    const imageOpenButtons = document.querySelectorAll('.open-custom-modal'); // Seleciona todos os botões com essa classe

    // Função para abrir o modal
    const openModal = (imageSrc) => {
        modalImageContent.src = imageSrc; // Define a fonte da imagem no modal
        customImageModal.classList.remove('hidden'); // Mostra o modal
        document.body.style.overflow = 'hidden'; // Impede rolagem do body quando o modal está aberto
    };

    // Função para fechar o modal
    const closeModal = () => {
        customImageModal.classList.add('hidden'); // Esconde o modal
        document.body.style.overflow = ''; // Restaura a rolagem do body
    };

    // Adiciona evento de clique para cada botão da galeria
    imageOpenButtons.forEach(button => {
        button.addEventListener('click', () => {
            const imageSrc = button.dataset.imageSrc; // Pega o caminho da imagem do atributo data-image-src
            if (imageSrc) {
                openModal(imageSrc);
            }
        });
    });

    // Adiciona evento de clique para o botão de fechar
    if (closeImageModalButton) {
        closeImageModalButton.addEventListener('click', closeModal);
    }

    // Adiciona evento de clique fora da imagem para fechar o modal
    if (customImageModal) {
        customImageModal.addEventListener('click', (event) => {
            // Fecha o modal se o clique não for na imagem ou no botão de fechar
            if (event.target === customImageModal) {
                closeModal();
            }
        });
    }

    // Opcional: Fechar modal com a tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !customImageModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // --- Código para o Menu Mobile (se estiver em main.js) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    // --- Fim do Código para o Menu Mobile ---
});