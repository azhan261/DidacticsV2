//getting API for showing all the data
export const getCourseContents = () => fetch("https://didactics.one/coursePlannings").then(res => res.json())

//getting API for inserting the data
export const createCourseContents = (todo) => fetch("https://didactics.one/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCourseContents = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCourseContent = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())