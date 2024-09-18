document.addEventListener('DOMContentLoaded', () => {
    const perfis = document.querySelectorAll('.perfil');

    perfis.forEach(perfil => {
        perfil.addEventListener('click', () => {
            const url = perfil.getAttribute('data-url'); // Pega o URL do atributo data-url
            if (url) {
                window.location.href = url; // Redireciona para a nova página
            }
        });
    });
});
