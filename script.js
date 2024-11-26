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

// Script para contar e mostrar os itens selecionados
let pedidoCount = 0;

function adicionarPedido(item) {
    pedidoCount++;
    alert(`Você adicionou: ${item} ao pedido. Total de itens no pedido: ${pedidoCount}`);
}
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.querySelector('h3').textContent;
        const cartItems = document.getElementById('cart-items');

        const newItem = document.createElement('p');
        newItem.textContent = itemName;

        cartItems.appendChild(newItem);
    });
});
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.querySelector('h3').textContent;
        const itemPrice = parseFloat(item.getAttribute('data-preco'));
        const cartItems = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');

        // Adiciona o item no carrinho
        const newItem = document.createElement('p');
        newItem.textContent = `${itemName} - R$${itemPrice.toFixed(2)}`;
        cartItems.appendChild(newItem);

        // Calcula o total
        let currentTotal = parseFloat(totalPriceElement.textContent.replace('Total: R$', '').replace(',', '.'));
        currentTotal += itemPrice;
        totalPriceElement.textContent = `Total: R$${currentTotal.toFixed(2).replace('.', ',')}`;
    });
});
// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} foi adicionado ao carrinho!`);
    updateCart(); // Atualiza o carrinho e o valor total
}

// Função para calcular o valor total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Função para atualizar o carrinho e o valor total na tela
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total-price');
    
    // Limpar o conteúdo atual do carrinho
    cartItemsContainer.innerHTML = '';
    
    // Adicionar os itens do carrinho ao HTML
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
    });

    // Atualizar o valor total
    const total = calculateTotal();
    totalContainer.textContent = `Total: R$${total.toFixed(2)}`;
}

// Função para finalizar o pedido
function finalizeOrder() {
    if (cart.length > 0) {
        const total = calculateTotal();
        alert(`Pedido finalizado! Total: R$${total.toFixed(2)}`);
        // Exibir o valor total na tela (em vez de apenas no alert)
        document.getElementById('total-price').textContent = `Total: R$${total.toFixed(2)}`;
        cart = []; // Limpar o carrinho após finalizar
        updateCart(); // Atualizar a tela após finalizar
    } else {
        alert("Seu carrinho está vazio!");
    }
}
