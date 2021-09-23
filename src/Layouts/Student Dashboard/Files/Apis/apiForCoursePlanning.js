//getting API for showing all the data
export const getCoursePlannings = () => fetch("https://didactics.one/coursePlannings").then(res => res.json())
export const getCoursePlanningsForGrade1 = () => fetch("https://didactics.one/coursePlannings/Grade-1").then(res => res.json())
export const getCoursePlanningsForGrade2 = () => fetch("https://didactics.one/coursePlannings/Grade-2").then(res => res.json())
export const getCoursePlanningsForGrade3 = () => fetch("https://didactics.one/coursePlannings/Grade-3").then(res => res.json())
export const getCoursePlanningsForGrade4 = () => fetch("https://didactics.one/coursePlannings/Grade-4").then(res => res.json())
export const getCoursePlanningsForGrade5 = () => fetch("https://didactics.one/coursePlannings/Grade-5").then(res => res.json())
export const getCoursePlanningsForGrade6 = () => fetch("https://didactics.one/coursePlannings/Grade-6").then(res => res.json())
export const getCoursePlanningsForGrade7 = () => fetch("https://didactics.one/coursePlannings/Grade-7").then(res => res.json())
export const getCoursePlanningsForGrade8 = () => fetch("https://didactics.one/coursePlannings/Grade-8").then(res => res.json())
export const getCoursePlanningsForGrade9 = () => fetch("https://didactics.one/coursePlannings/Grade-9").then(res => res.json())
export const getCoursePlanningsForGrade10 = () => fetch("https://didactics.one/coursePlannings/Grade-10").then(res => res.json())
export const getCoursePlanningsForGrade11 = () => fetch("https://didactics.one/coursePlannings/Grade-11").then(res => res.json())
export const getCoursePlanningsForGrade12 = () => fetch("https://didactics.one/coursePlannings/Grade-12").then(res => res.json())

//getting API for inserting the data
export const createCoursePlannings = (todo) => fetch("https://didactics.one/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCoursePlannings = (todo, id) => fetch(`https://didactics.one/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteCoursePlannings = (todo, id) => fetch(`https://didactics.one/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCoursePlanning = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())