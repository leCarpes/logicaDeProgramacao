// Calcular Troco

function calculateChange() {
    const inputName = document.getElementById('inputName').value;
    const inputPrice = parseFloat(document.getElementById('inputPrice').value);
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    // const paragraph = document.getElementById('paragraph');
    // const titleResult = document.getElementById('titleResult');
    // const textResult = document.getElementById('textResult');


    paragraph.innerText = ''

    if (inputName === '') {
        paragraph.innerText = '❗Por favor, insira o nome do produto❗';
        return;
    }

    if (isNaN(inputPrice) || isNaN(inputValue) || inputPrice <= 0 || inputValue <= 0) {
        paragraph.innerText = '❗Por favor, insira um valor válido e positivo❗';
        return;
    }

    const change = inputValue - inputPrice;

    if (change < 0) {
        titleResult.innerText = 'Valor Insuficiente';
        textResult.innerText = `Você não deu dinheiro suficiente para pagar o ${inputName}`;
    } else if (change === 0) {
        titleResult.innerText = 'Troco Zero';
        textResult.innerText = `Você deu exatamente o valor necessário para pagar o ${inputName}`;
    } else {
        titleResult.innerText = 'Troco';
        textResult.innerText = ` Você comprou ${inputName} que custou R$${inputPrice.toFixed(2)}
        Forneceu o valor de R$${inputValue.toFixed(2)} e recebeu ${change.toFixed(2)} de troco
    `;
    }

}

function reloadPage() {
    window.location.reload();
}
