//limpa o texto recebido, deixando só letras minúsculas e números, tirando espaços e símbolos
function cleanText(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, ''); // transforma tudo em minúsculo e remove caracteres que não são letras ou números
}
// verifica se o texto é um palíndromo
function isPalindrome(text) {
  const cleaned = cleanText(text); // limpa o texto antes de verificar
  const reversed = cleaned.split('').reverse().join(''); // inverte o texto limpo (transforma em array, inverte e junta de novo)
  return cleaned === reversed;
}

// Adiciona um evento para quando o botão for clicado
document.getElementById('check-btn').addEventListener('click', () => {
  const input = document.getElementById('text-input').value;

  // Se o input estiver vazio, mostra um alerta 
  if (!input) {
    alert('Please input a value');
    return;
  }
  const resultElement = document.getElementById('result');// pega o elemento onde o resultado vai ser mostrado

  if (isPalindrome(input)) {
    resultElement.textContent = `${input} is a palindrome.`;
  } else {
    resultElement.textContent = `${input} is not a palindrome.`;
  }
});
