const nodemailer = require('nodemailer');

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

//Slide animation
let count = 1;
document.getElementById("radio1").checked = true;

    setInterval( function(){
        nextImage();
    }, 4000)

    function nextImage(){
    count++;
    if(count > 3){
    count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function updateSelect1(){
    let select = document.querySelector("#select-option1");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let text = optionValue.text;

    console.log("Selecionado1:" + text);
}

function updateSelect2(){
    let select = document.querySelector("#select-option2");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let text = optionValue.text;

    console.log("Selecionado2:" + text);
}

function updateSelect3(){
    let select = document.querySelector("#select-option3");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let text = optionValue.text;

    console.log("Selecionado3:" + text);
}

function getText(){
    let text = document.getElementById("text-box").value;

    console.log(text)
}
updateSelect1();
updateSelect2();
updateSelect3();
getText();

