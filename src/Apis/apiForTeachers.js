export const getTodosForTeacher = () => fetch("https://didactics.one/").then(res => res.json())

//getting API for inserting the data
export const createTodoForTeachers = (todo) => fetch("https://didactics.one/teachers/create", {

  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTeacher = (id) => fetch(`https://didactics.one/teachers/specific/${id}`).then(res => res.json())