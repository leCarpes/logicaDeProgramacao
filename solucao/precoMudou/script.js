

function validateMoney() {
    const precoAnterior = parseFloat(document.getElementById('inputBefore').value);
    const precoAtual = parseFloat(document.getElementById('inputAfter').value);
    // const paragraph = document.getElementById('paragraph');
    // const titleResult = document.getElementById('titleResult');
    // const textResult = document.getElementById('textResult');


    paragraph.innerText = ''

    if (isNaN(precoAnterior) || isNaN(precoAtual) || precoAnterior <= 0 || precoAtual <= 0) {
        textResult.innerText = '❗Por favor, insira um valor válido e positivo❗';
        return;
    }

    
    if (precoAtual > precoAnterior) {
        const diferenca = precoAtual - precoAnterior;
        const percentual = ((diferenca / precoAnterior) * 100).toFixed(2);

        titleResult.innerText = 'Aumento de Preço';
        textResult.innerHTML = `Houve um aumento de R$${diferenca.toFixed(2)} (+ ${percentual}%)`;

    } else if (precoAtual < precoAnterior) {
        const diferenca = precoAnterior - precoAtual;
        const percentual = ((diferenca / precoAnterior) * 100).toFixed(2);

        titleResult.innerText = 'Redução de Preço';
        textResult.innerHTML = `Houve uma redução de R$${diferenca.toFixed(2)} (- ${percentual}%)`;

    } else {
        titleResult.innerText = 'Variação de Preço';
        textResult.innerText = 'Os preços são iguais.';
    }
}

function reloadPage(){
    window.location.reload()
}

