//Reajuste Salarial

function readjustSalary() {
    const inputName = document.getElementById('inputName').value;
    const inputSalary = parseFloat(document.getElementById('inputSalary').value);
    const inputPercentage = parseFloat(document.getElementById('inputPercentage').value);
    // const paragraph = document.getElementById('paragraph');
    // const titleResult = document.getElementById('titleResult');
    // const textResult = document.getElementById('textResult');

    paragraph.innerText = ''

    if (inputName === '') {
        textResult.innerText = '❗Por favor, insira o nome do funcionário(a)❗';
        return;
    }

    if (isNaN(inputSalary) || isNaN(inputPercentage) || inputSalary <= 0 || inputPercentage <= 0) {
        textResult.innerText = '❗Por favor, insira valores válidos e positivos❗';
        return;
    }

    titleResult.innerText = `${inputName} recebeu um aumento salarial!`;

    const readjust = (inputSalary * (inputPercentage / 100)).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    const totalSalary = (inputSalary + parseFloat(readjust)).toLocaleString('pt-BR', { maximumFractionDigits: 2 });

    textResult.innerText = `
       O salário atual é R$${inputSalary.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
       Com um reajuste de ${inputPercentage}%, o salário vai aumentar R$${readjust}
       E a partir daí, ${inputName} vai receber R$${totalSalary}
    `;
}


function reloadPage(){
    window.location.reload()
  }