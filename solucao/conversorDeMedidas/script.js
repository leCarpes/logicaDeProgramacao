//Conversor de Medidas

function converterMeasure() {
    const inputMed = parseFloat(document.getElementById('inputMed').value);
    // const textResult = document.getElementById('textResult');
    // const titleResult = document.getElementById('titleResult');
    // const paragraph = document.getElementById('paragraph');

    paragraph.innerText = ''
  
    if (isNaN(inputMed) || inputMed <= 0) {
        textResult.innerText = '❗Por favor, insira um valor válido e positivo❗';
        return;
      }

    titleResult.innerText = `A distância de ${inputMed} metros, corresponde a... `


    const converter = {
        Km: (inputMed / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 3 }),
        Hm: (inputMed / 100).toLocaleString('pt-BR', { maximumFractionDigits: 3 }),
        Dam: (inputMed / 10).toLocaleString('pt-BR', { maximumFractionDigits: 3 }),
        dm: (inputMed * 10).toLocaleString('pt-BR', { maximumFractionDigits: 3 }),
        cm: (inputMed * 100).toLocaleString('pt-BR', { maximumFractionDigits: 3 }),
        mm: (inputMed * 1000).toLocaleString('pt-BR', { maximumFractionDigits: 3 }),
    }

    if (converter) {
        textResult.innerText = `
        Km: ${converter.Km} quilomêtro(s) - (Km)
        Hm: ${converter.Hm} hectômetro(s) - (Hm)
        Dam:${converter.Dam} decâmetro(s) - (Dam)
        dm: ${converter.dm} decímetro(s) - (dm)
        cm: ${converter.cm} centímetro(s) - (cm)
        mm: ${converter.mm} milímetro(s) - (mm)
    `
    }

}

function reloadPage(){
    window.location.reload()
  }


