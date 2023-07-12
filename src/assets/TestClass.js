import defaultImage from '../img/defaultImage.jpg';

class TestClass {
   constructor(testInfo, questions, results) {
      this.testInfo = testInfo;
      this.questions = [];
      this.results = [];
   }

   addTestInfo(testName, testDesc, testImage) {
      this.testInfo = {
         testName,
         testDesc,
         imatestImagege: testImage || defaultImage
      }
   }

   calcResultScore(resultName) {
      return this.questions.reduce((sum, question) => {
         question.answers.forEach(answer => {
            if (resultName === answer.answerResult) sum += answer.answerScore;
         });
         return sum;
      }, 0);
   }

   addResults(resultName, resultDesc, resultImage) {
      this.results.push({
         resultName,
         resultDesc: resultDesc || '',
         resultScore: this.calcResultScore(resultName),
         resultImage: resultImage || defaultImage
      });
      console.log(this.results);
   }

   addQuestion(questionName, questionDesc, questionImage) {
      this.questions.push({
         questionName,
         questionDesc: questionDesc || '',
         questionImage: questionImage || defaultImage,
         answers: []
      });
   }

   addAnswer(questionName, answerNumber, answerText, answerResult, answerScore) { // переписать

      this.questions.find(question => question.questionName === questionName)
      .answers[answerNumber] = {
         answerText,
         answerResult,
         answerScore
      };

      this.results.find(result => result.resultName === answerResult)
      .resultScore = this.calcResultScore(answerResult);
   }
}

export default TestClass;