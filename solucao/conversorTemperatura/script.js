// Converor de Temperatura

function converterTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    // const textResult = document.getElementById('textResult');
    // const titleResult = document.getElementById('titleResult');
    // const paragraph = document.getElementById('paragraph');

    paragraph.innerText = ''
  
        if (isNaN(inputTemp)) {
            textResult.innerText = '❗Por favor, insira um valor válido❗';

            return;
        }

    
    const converter = {
        kelvin: inputTemp + 273.15,
        fahrenheit: (inputTemp * 9/5) + 32
    }

    titleResult.innerText = `A temperatura de ${inputTemp}°C corresponde a...`;


    textResult.innerText = `
            Kelvin: ${converter.kelvin.toFixed(2)}°K
            Fahrenheit: ${converter.fahrenheit.toFixed(2)}°F
        `;
}

function reloadPage(){
    window.location.reload()
  }



