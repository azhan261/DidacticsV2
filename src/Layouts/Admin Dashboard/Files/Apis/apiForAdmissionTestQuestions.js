//getting API for showing all the data
export const getAdmissionTestQuestions = () => fetch("https://didactics.one/admissionQuestions").then(res => res.json())

//getting API for inserting the data
export const createAdmissionTestQuestions = (todo) => fetch("https://didactics.one/admissionQuestions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAdmissionTestQuestions = (todo, _id) => fetch(`https://didactics.one/${_id}`, {
// http://localhost:4000/${id}
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAdmissionTestQuestion = (_id) => fetch(`https://didactics.one/${_id}`).then(res => res.json())