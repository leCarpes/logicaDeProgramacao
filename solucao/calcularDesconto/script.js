//Calcular desconto

function discount() {
    const inputProduct = document.getElementById('inputProduct').value;
    const inputPrice = parseFloat(document.getElementById('inputPrice').value);
    // const paragraph = document.getElementById('paragraph');
    // const titleResult = document.getElementById('titleResult');
    // const textResult = document.getElementById('textResult');

    paragraph.innerText = '';

    if (inputProduct === '') {
        textResult.innerText = '❗Por favor, insira o nome do produto❗';
        return;
    }

    if (isNaN(inputPrice) || inputPrice <= 0) {
        textResult.innerText = '❗Por favor, insira um valor válido e positivo❗';
        return;
    }


    titleResult.innerText = `Calculando desconto de 10% para ${inputProduct}`

    const precoOriginal = inputPrice;
    const precoDesconto = precoOriginal * 0.1;
    const precoTotal = precoOriginal - precoDesconto;

    textResult.innerText = `
        O preço original era R$${precoOriginal.toFixed(2)}
        Você acaba de ganhar R$${precoDesconto.toFixed(2)} de desconto (-10%)
        No fim, você vai pagar R$${precoTotal.toFixed(2)} em seu(s) produto(s)
    `;
}

function reloadPage(){
    window.location.reload()
  }




