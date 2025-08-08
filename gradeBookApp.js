// Função para calcular a média de um array de números (notas)
function getAverage(scores) {
  let sum = 0;
  // Loop que percorre todas as notas e soma elas
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}
// Testando a função getAverage com dois conjuntos de notas
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Função que recebe uma nota e retorna a letra da nota (conceito)
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// Testando a função getGrade com algumas notas
console.log(getGrade(96)); // A
console.log(getGrade(82)); // B
console.log(getGrade(56)); // F

// Função que verifica se a nota é de aprovação (não é F)
function hasPassingGrade(score) {
  const grade = getGrade(score); // pega o conceito da nota
  return grade !== "F";
}

// Testando se a nota passou ou não
console.log(hasPassingGrade(100)); // true (A++)
console.log(hasPassingGrade(53));  // false (F)
console.log(hasPassingGrade(87));  // true (B)

// Função que cria uma mensagem para o aluno com base na média da turma e na nota dele
function studentMsg(totalScores, studentScore) {
  // Calcula a média da turma 
  const average = getAverage(totalScores);
  // Pega a nota do aluno 
  const grade = getGrade(studentScore);
  // Verifica se o aluno passou 
  const passed = hasPassingGrade(studentScore);

  // Monta a mensagem conforme passou ou não
  let message = "Class average: " + average + ". Your grade: " + grade + ". You ";
  message += passed ? "passed the course." : "failed the course.";

  return message;
}

// Testa a função studentMsg com as notas da turma e a nota do aluno 37
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

