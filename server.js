const express = require('express');
const path = require('path');


const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res){
    res.sendFile(path.resolve(__dirname,'public', 'index.html'));
})

app.listen(process.env.PORT || 8080, () => {
    console.log('server running...')
    console.log(`Listening on http://localhost:${process.env.PORT || 8080}`);
});