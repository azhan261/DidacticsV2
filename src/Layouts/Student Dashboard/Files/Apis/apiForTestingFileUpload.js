//getting API for showing all the data
export const getFiles = () => fetch("https://didactics.one/api").then(res => res.json())


//getting API for inserting the data
export const createAnswers = (todo) => fetch("https://didactics.one/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAnswer = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())