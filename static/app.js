function adicionarAoCarrinho(itemId) {
    fetch("/api/adicionar_com_customizacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            item_id: itemId,
            customizacoes: []
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.sucesso) {
            atualizarCarrinhoVisual()
        }
    })
}

function atualizarCarrinhoVisual() {
    let contador = document.getElementById("cart-count")
    if (contador) {
        contador.innerText = parseInt(contador.innerText || 0) + 1
    }
}
