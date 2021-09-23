//getting API for showing all the data
export const getAnswers = () => fetch("https://didactics.one/answers").then(res => res.json())

export const getAnswersMCQ = () => fetch("https://didactics.one/answers/MCQ-answers").then(res => res.json())
export const getAnswersBlanks = () => fetch("https://didactics.one/answers/Blanks-answers").then(res => res.json())
export const getAnswersPronunciation = () => fetch("https://didactics.one/answers/Pronunciation-answers").then(res => res.json())
export const getAnswersQA = () => fetch("https://didactics.one/answers/QA-answers").then(res => res.json())
export const getAnswersHandWriting = () => fetch("https://didactics.one/answers/HandWriting-answers").then(res => res.json())

export const getAnswersGrade1 = () => fetch("https://didactics.one/answers/Grade-1").then(res => res.json())
export const getAnswersGrade2 = () => fetch("https://didactics.one/answers/Grade-2").then(res => res.json())
export const getAnswersGrade3 = () => fetch("https://didactics.one/answers/Grade-3").then(res => res.json())
export const getAnswersGrade4 = () => fetch("https://didactics.one/answers/Grade-4").then(res => res.json())
export const getAnswersGrade5 = () => fetch("https://didactics.one/answers/Grade-5").then(res => res.json())
export const getAnswersGrade6 = () => fetch("https://didactics.one/answers/Grade-6").then(res => res.json())
export const getAnswersGrade7 = () => fetch("https://didactics.one/answers/Grade-7").then(res => res.json())
export const getAnswersGrade8 = () => fetch("https://didactics.one/answers/Grade-8").then(res => res.json())
export const getAnswersGrade9 = () => fetch("https://didactics.one/answers/Grade-9").then(res => res.json())
export const getAnswersGrade10 = () => fetch("https://didactics.one/answers/Grade-10").then(res => res.json())
export const getAnswersGrade11 = () => fetch("https://didactics.one/answers/Grade-11").then(res => res.json())
export const getAnswersGrade12 = () => fetch("https://didactics.one/answers/Grade-12").then(res => res.json())

export const getAnswersGrade1ForTest = () => fetch("https://didactics.one/answers/Grade-1-test").then(res => res.json())
export const getAnswersGrade2ForTest = () => fetch("https://didactics.one/answers/Grade-2-test").then(res => res.json())
export const getAnswersGrade3ForTest = () => fetch("https://didactics.one/answers/Grade-3-test").then(res => res.json())
export const getAnswersGrade4ForTest = () => fetch("https://didactics.one/answers/Grade-4-test").then(res => res.json())
export const getAnswersGrade5ForTest = () => fetch("https://didactics.one/answers/Grade-5-test").then(res => res.json())
export const getAnswersGrade6ForTest = () => fetch("https://didactics.one/answers/Grade-6-test").then(res => res.json())
export const getAnswersGrade7ForTest = () => fetch("https://didactics.one/answers/Grade-7-test").then(res => res.json())
export const getAnswersGrade8ForTest = () => fetch("https://didactics.one/answers/Grade-8-test").then(res => res.json())
export const getAnswersGrade9ForTest = () => fetch("https://didactics.one/answers/Grade-9-test").then(res => res.json())
export const getAnswersGrade10ForTest = () => fetch("https://didactics.one/answers/Grade-10-test").then(res => res.json())
export const getAnswersGrade11ForTest = () => fetch("https://didactics.one/answers/Grade-11-test").then(res => res.json())
export const getAnswersGrade12ForTest = () => fetch("https://didactics.one/answers/Grade-12-test").then(res => res.json())

//getting API for inserting the data
export const createAnswers = (todo) => fetch("http://localhost:3005/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAnserReview = (todo, id) => fetch(`https://didactics.one/answers/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAnswer = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())