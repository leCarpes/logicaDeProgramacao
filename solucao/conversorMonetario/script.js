//Conversor Monetário


  function converterMonetary() {
    const inputDolar = parseFloat(document.getElementById('inputDolar').value);
    const inputMoney = parseFloat(document.getElementById('inputMoney').value);
    // const paragraph = document.getElementById('paragraph');
    // const titleResult = document.getElementById('titleResult');
    // const textResult = document.getElementById('textResult');

    paragraph.innerText = '';

    if (isNaN(inputDolar) || isNaN(inputMoney)) {
        textResult.innerText = '❗Por favor, insira valores válidos❗';
        return;
    }

    if (inputDolar <= 0 || inputMoney <= 0) {
        textResult.innerText = '❗Por favor, insira valores positivos❗';
        return;
    }

    textResult.innerText = '';

    const result = (inputDolar * inputMoney).toLocaleString('pt-BR', { maximumFractionDigits: 2 });

    titleResult.innerText = `O Valor em Dólar é ${result}`;
}

function reloadPage(){
    window.location.reload();
}
