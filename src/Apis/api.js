//getting API for showing all the data
export const getTodos = () => fetch("https://didactics.one/").then(res => res.json())

//getting API for inserting the data
export const createTodo = (todo) => fetch("https://didactics.one/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodo = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTodo = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())