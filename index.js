var express = require('express'),
    applet = require('./routes/info');

var app = express();

app.get('/contact', applet.findAll);
app.get('/contact/:id', applet.findById);
app.post('contact',addContact)
app.put('/contact',updateContact)
app.delete('/contact',deleteContact)

app.listen(3000);
console.log('Listening on port 3000...');