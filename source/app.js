var express = require('express');
var app = express();

// Obsługa strony głównej
app.get('/', function(req, res){
    res.send('<a href="/users">Przejdź do strony użytkownika</a><br>' +
             '<a href="/services">Przejdź do strony serwisu</a><br>'
			 '<a href="/users">Przejdź do strony informacyjnej</a><br> +
             'DevOps - Strona startowa!');
    console.log('Zażądano strony Start');
});

// Obsługa strony użytkownika
app.get('/users', function(req, res){
    res.send('<a href="/">Powrót do strony startowej</a><br>' +
             '<a href="/services">Przejdź do strony serwisu</a><br>'
			 '<a href="/users">Przejdź do strony informacyjnej</a><br> +
             'DevOps - strona Users!');
    console.log('Zażądano strony Users');
});

// Obsługa strony serwisu
app.get('/services', function(req, res){
    res.send('<a href="/">Powrót do strony startowej</a><br>' +
             '<a href="/users">Przejdź do strony użytkownika</a><br>'
			 '<a href="/users">Przejdź do strony informacyjnej</a><br> +
             'DevOps - strona Services!');
    console.log('Zażądano strony Services');
});

// Obsługa strony Info
app.get('/services', function(req, res){
    res.send('<a href="/">Powrót do strony startowej</a><br>' +
             '<a href="/users">Przejdź do strony użytkownika</a><br>'
			 '<a href="/users">Przejdź do strony serwisu</a><br> +
             'DevOps - strona Info!');
    console.log('Zażądano strony Info');
});


// Start serwera
app.listen(3001, function(){
"app.js" 