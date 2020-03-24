const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/estilo.css', function(req, res){
    res.sendFile(__dirname + '/estilo.css')
})

app.get('/script.js', function(req, res){
    res.sendFile(__dirname + '/script.js')
})

app.get('/img', function(req, res){
    res.sendFile(__dirname + '/img')
})





app.listen(8002, function(){
    console.log('Aplicação simples para mostrar hora, Rodando na porta 8002')
})