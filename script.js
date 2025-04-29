const carrinho = [];

function adicionarCarrinho(item, preco) {
  carrinho.push({ item, preco });
  atualizarCarrinho();
}

function removerCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const total = document.getElementById('total');
  lista.innerHTML = '';
  let soma = 0;
  carrinho.forEach(({ item, preco }, i) => {
    const li = document.createElement('li');
    li.className = 'carrinho-item';
    li.innerHTML = `${item} - R$${preco.toFixed(2)} <button class="remover-btn" onclick="removerCarrinho(${i})">Remover</button>`;
    lista.appendChild(li);
    soma += preco;
  });
  total.textContent = `Total: R$${soma.toFixed(2)}`;
}

function enviarPedido() {
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mesa = document.getElementById('mesa').value.trim();

  if (!nome || !telefone || !mesa || carrinho.length === 0) {
    alert('Preencha todos os campos e adicione ao menos um item ao carrinho.');
    return;
  }

  let mensagem = `*Pedido Restaurante Chinês*\n\n` +
    `*Cliente:* ${nome}\n` +
    `*Telefone:* ${telefone}\n` +
    `*Mesa:* ${mesa}\n\n` +
    `*Itens:*\n`;

  carrinho.forEach(({ item, preco }) => {
    mensagem += `- ${item} - R$${preco.toFixed(2)}\n`;
  });

  const total = carrinho.reduce((s, i) => s + i.preco, 0);
  mensagem += `\n*Total:* R$${total.toFixed(2)}`;

  const numeroWhatsApp = '5561981227195'; // substitua pelo número real
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
