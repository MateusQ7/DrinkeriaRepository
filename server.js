const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(path.join(__dirname, 'public', 'css')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    
    console.log(__dirname);
})

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});