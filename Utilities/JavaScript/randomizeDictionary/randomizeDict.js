const question = {
  answers: {
    a: "Un string con el índice del array de meses",
    b: "Un integer",
    c: "Un objeto",
    d: "Un string con el nombre del mes en inglés",
  },
  correctAnswer: "b",
};

function shuffleAnswers() {
  const answerArr = Object.entries(this.answers);
  answerArr.sort(() => 0.5 - Math.random());
  const newCorrectAnswer = { 0: "a", 1: "b", 2: "c", 3: "d" }[
    answerArr.findIndex((q) => q[0] === this.correctAnswer)
  ];
  Object.keys(this.answers).forEach((char, index) => {
    answerArr[index][0] = char;
  });
  const answerObj = Object.fromEntries(answerArr);
  this.answers = answerObj;
  this.correctAnswer = newCorrectAnswer;
}

question.shuffleAnswers = shuffleAnswers;
question.shuffleAnswers();
console.log(question);


// function shuffleAnswersV1(question) {
//   const answerArr = Object.entries(question.answers);
//   answerArr.sort(() => 0.5 - Math.random());
//   const newCorrectAnswer = { 0: "a", 1: "b", 2: "c", 3: "d" }[
//     answerArr.findIndex((q) => q[0] === question.correctAnswer)
//   ];
//   Object.keys(question.answers).forEach((char, index) => {
//     answerArr[index][0] = char;
//   });
//   const answerObj = Object.fromEntries(answerArr);

//   question.answers = answerObj;
//   question.correctAnswer = newCorrectAnswer;
//   return question;
// }

// console.log(shuffleAnswers(question));