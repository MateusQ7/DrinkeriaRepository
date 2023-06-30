const express = require("express");
const path = require("path");
const app = express();
app.use(express.json())
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const SMTP_CONFIG = require("./public/smtp");

var urlencodedParser = bodyParser.urlencoded({ extended: false});

let transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendEmail(req){

  let mailSent = await transporter.sendMail({
      from: 'quixateste@gmail.com',
      to: 'mateusquixada@gmail.com',
      subject: 'Teste do site',
      text: "Email recebido de drinkeriapremium.com.br\n" + "Tipo de festa: " + req.body.value1 + "\n" + "Para quantas pessoas: " + req.body.value2 + "\n"
      + "Quanto tempo de evento: " + req.body.value3 + "\n" + "\n" + "Descrição: " + req.body.textArea + "\n" + "Contato: " + req.body.textContact
  });
  console.log("Email enviado: " + mailSent);
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
  sendEmail(req);
  res.sendStatus(201);
})

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});