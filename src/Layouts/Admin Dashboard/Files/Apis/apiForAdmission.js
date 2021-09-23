//getting API for showing all the data
export const getAdmissions = () => fetch("https://didactics.one/admissions").then(res => res.json())

//getting API for inserting the data
export const createAdmissions = (todo) => fetch("https://didactics.one/admissions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAdmissions = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAdmission = (id) => fetch(`https://didactics.one/admissions${id}`).then(res => res.json())