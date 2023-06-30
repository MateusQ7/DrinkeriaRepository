//Slide animation
let count = 1;
document.getElementById("radio1").checked = true;

    setInterval( function(){
        nextImage();
        console.log("mudei")
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
    let textSelect1 = optionValue.text;

    console.log("Selecionado1:" + textSelect1);
}

function updateSelect2(){
    let select = document.querySelector("#select-option2");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let textSelect2 = optionValue.text;

    console.log("Selecionado2:" + textSelect2);
}

function updateSelect3(){
    let select = document.querySelector("#select-option3");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let textSelect3 = optionValue.text;

    console.log("Selecionado3:" + textSelect3);
}

function getTextArea(){
    let textArea = document.getElementById("text-box").value;

    console.log(textArea)
}

function getTextContact(){
    let textContact = document.getElementById("text-contact").value;

    console.log(textContact);
}

updateSelect1();
updateSelect2();
updateSelect3();
getTextArea();
getTextContact();

