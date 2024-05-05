// // Calcular média de aprovação, recuperação e reprovação

function calculateGrades(){
    const inputName = document.getElementById('inputName').value;
    const inputNoteFirst = parseFloat(document.getElementById('inputNoteFirst').value);
    const inputNoteSecond = parseFloat(document.getElementById('inputNoteSecond').value);
    // const paragraph = document.getElementById('paragraph');
    // const titleResult = document.getElementById('titleResult');
    // const textResult = document.getElementById('textResult');

    paragraph.innerText = ''

    if (inputName === '') {
        textResult.innerText = '❗Por favor, insira o nome do aluno(a)❗';
        return;
    }

    if (isNaN(inputNoteFirst) || isNaN(inputNoteSecond) || inputNoteFirst < 0 || inputNoteSecond < 0) {
        textResult.innerText = '❗Por favor, insira valores válidos e positivos❗';
        return;
    }


    titleResult.innerText = `Analisando a situação de ${inputName}`

    const average = (inputNoteFirst + inputNoteSecond) / 2;


       if (average < 3) {
        textResult.innerHTML = `Com as notas ${inputNoteFirst.toFixed(1)} e ${inputNoteSecond.toFixed(1)}, a média é ${average.toFixed(1)}<br>
        Com média abaixo de 3.0, o aluno está <span class="reprovado">reprovado</span>`;

    } else if (average <= 6) {
        textResult.innerHTML = `Com as notas ${inputNoteFirst.toFixed(1)} e ${inputNoteSecond.toFixed(1)}, a média é ${average.toFixed(1)}<br>
        Com média entre de 3.0 e 6.0, o aluno está em <span class="recuperacao">recuperação</span>`;

    } else {
        textResult.innerHTML = `Com as notas ${inputNoteFirst.toFixed(1)} e ${inputNoteSecond.toFixed(1)}, a média é ${average.toFixed(1)}<br>
        Com média acima de 6.0, o aluno está <span class="aprovado">aprovado</span>`;

    }
}

    
function reloadPage(){
    window.location.reload()
  }

