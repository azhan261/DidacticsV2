//getting API for showing all the data
export const getCoursePlannings = () => fetch("https://didactics.one/coursePlanning").then(res => res.json())

//getting API for inserting the data
export const createCoursePlannings = (todo) => fetch("https://didactics.one/coursePlanning/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCoursePlannings = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCoursePlanning = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())