// Importa pacote express
const express = require('express');
const calc = require('./atividade3/calculadora');
// Cria uma aplicação express
const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});


app.get('/somar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.somar(a, b);
    res.send(`${a} + ${b} = ${c}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.subtrair(a, b);
    res.send(`${a} - ${b} = ${c}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.multiplicar(a, b);
    res.send(`${a} * ${b} = ${c}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.dividir(a, b);
    res.send(`${a} / ${b} = ${c}`);
});

app.get('/lower/', function(req, res){
    res.send('hello');
});

const PORT = 8080;
app.listen(PORT, ()=>{
   console.log('app rodando na porta ' + PORT);
});
