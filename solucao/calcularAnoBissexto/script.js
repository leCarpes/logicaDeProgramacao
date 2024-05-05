//Ano Bissexto


function validateYear() {
  const inputYear = document.getElementById('inputYear').value;

  if (!Number.isInteger(Number(inputYear)) || inputYear <= 0) {
      textResult.innerText = '❗Por favor, insira um valor válido para o ano❗';
      return;
  }

  const year = parseInt(inputYear);

  titleResult.innerText = `Analisando o ano de ${year}...`;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      textResult.innerHTML = ` ✅ O ano ${year} <span class="correct">é bissexto!</span> ✅ `;
  } else {
      textResult.innerHTML = ` ❌ O ano ${year} <span class="incorrect">não é bissexto!</span> ❌`;
  }
}

function reloadPage() {
  window.location.reload();
}

