const express = require("express");
const path = require("path");
const app = express();
app.use(express.json())
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false});

async function sendEmail(){
  //Config
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'mateusquixada2001@edu.unifor.br',
          pass: '75953762'
      }
  });

  //Config email
  let mailOption = {
      from: 'mateusquixada2001@edu.unifor.br',
      to: 'mateusquixada@gmail.com',
      subject: 'Teste do site',
      text: ''
  }

  //Send email
  let info = await transporter.sendMail(mailOption);
  console.log("Email enviado: " + info.messageId);
}


app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(path.join(__dirname, 'public', 'css')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.sendFile(path.join(__dirname, 'public', "index.js"))
    console.log(__dirname);
})

app.get("/processado" , urlencodedParser, function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'DEUCERTOOBOTAO.html'));
})

app.post("/enviar" , function(req, res){
  console.log(req.body);
  res.sendStatus(201);
})

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});