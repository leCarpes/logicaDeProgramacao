//Ano Bissexto
function validateYear() {
    const inputYear = document.getElementById('inputYear').value;
    const result = document.getElementById('result');
  
    if (inputYear === '') {
      result.innerText = 'Por favor, insira um ano válido!';
  
      return;
    }
  
    const year = parseInt(inputYear);
  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      result.innerText = ` ✔️ O ano ${year} é bissexto! ✔️ `;
      
    } else {
      result.innerText = ` ❌ O ano ${year} não é bissexto! ❌`;
      
    }

  }

  function reloadPage(){
    window.location.reload()
  }