// Adicionando uma mensagem animada ao carregar a página
window.addEventListener("load", function() {
    alert("Bem-vindo à A Fantástica Fábrica de Sabores!");
});

// Exemplo de animação simples para o título
const headerTitle = document.querySelector("header h1");
headerTitle.style.transition = "transform 0.5s ease";
headerTitle.addEventListener("mouseover", () => {
    headerTitle.style.transform = "scale(1.1)";
});
headerTitle.addEventListener("mouseout", () => {
    headerTitle.style.transform = "scale(1)";
});

