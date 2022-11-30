const express = require('express');
const path = require('path');


const app = express(); 

app.use(express.static(path.join(__dirname, 'front-end')));

app.get('/*', function(req, res){
    console.log('req', req.rawHeaders);
    res.sendFile(path.resolve(__dirname,'front-end', 'index.html'));
})

app.listen(process.env.PORT || 8080, () => {
    console.log('server running...')
    console.log(`Listening on http://localhost:${process.env.PORT || 8080}`);
});