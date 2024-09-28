const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let produtos = [];

app.post('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produto = { id, nome, quantidade: parseInt(qtd) };
    produtos.push(produto);
    res.status(201).send("Produto adicionado com sucesso.");
});

app.get('/listar', (req, res) => {
    res.status(200).json(produtos);
});

app.delete('/remover/:id', (req, res) => {
    const { id } = req.params;
    produtos = produtos.filter(produto => produto.id !== id);
    res.send("Produto removido com sucesso.");
});

app.put('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = produtos.find(prod => prod.id === id);
    if (produto) {
        produto.quantidade = parseInt(qtd);
        res.send("Quantidade do produto alterada com sucesso.");
    } else {
        res.status(404).send("Produto não encontrado.");
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});