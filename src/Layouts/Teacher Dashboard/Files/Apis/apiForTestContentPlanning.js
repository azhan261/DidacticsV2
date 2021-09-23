//getting API for showing all the data
export const getTestPlannings = () => fetch("https://didactics.one/testPlannings").then(res => res.json())
export const getTestPlanningsForGrade1 = () => fetch("https://didactics.one/testPlannings/Grade-1").then(res => res.json())
export const getTestPlanningsForGrade2 = () => fetch("https://didactics.one/testPlannings/Grade-2").then(res => res.json())
export const getTestPlanningsForGrade3 = () => fetch("https://didactics.one/testPlannings/Grade-3").then(res => res.json())
export const getTestPlanningsForGrade4 = () => fetch("https://didactics.one/testPlannings/Grade-4").then(res => res.json())
export const getTestPlanningsForGrade5 = () => fetch("https://didactics.one/testPlannings/Grade-5").then(res => res.json())
export const getTestPlanningsForGrade6 = () => fetch("https://didactics.one/testPlannings/Grade-6").then(res => res.json())
export const getTestPlanningsForGrade7 = () => fetch("https://didactics.one/testPlannings/Grade-7").then(res => res.json())
export const getTestPlanningsForGrade8 = () => fetch("https://didactics.one/testPlannings/Grade-8").then(res => res.json())
export const getTestPlanningsForGrade9 = () => fetch("https://didactics.one/testPlannings/Grade-9").then(res => res.json())
export const getTestPlanningsForGrade10 = () => fetch("https://didactics.one/testPlannings/Grade-10").then(res => res.json())
export const getTestPlanningsForGrade11 = () => fetch("https://didactics.one/testPlannings/Grade-11").then(res => res.json())
export const getTestPlanningsForGrade12 = () => fetch("https://didactics.one/testPlannings/Grade-12").then(res => res.json())

//getting API for inserting the data
export const createTestPlannings = (todo) => fetch("https://didactics.one/testPlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTestPlannings = (todo, id) => fetch(`https://didactics.one/testPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteTestPlannings = (todo, id) => fetch(`https://didactics.one/testPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTestPlanning = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())