//getting API for showing all the data
export const getBookContents = () => fetch("https://didactics.one/flip-book").then(res => res.json())
export const getBookContentsResponses = () => fetch("https://didactics.one/flip-book-response").then(res => res.json())

//getting API for inserting the data
export const createBookContents = (todo) => fetch("https://didactics.one/flip-book/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createBookContentsResponses = (todo) => fetch("https://didactics.one/flip-book-response/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateBookContent = (todo, id) => fetch(`https://didactics.one/flip-book/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateBookContentResponse = (todo, id) => fetch(`https://didactics.one/flip-book-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteBookContent = (todo, id) => fetch(`https://didactics.one/flip-book/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const deleteBookContentResponse = (todo, id) => fetch(`https://didactics.one/flip-book-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getBookContent = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())
export const getBookContentResponse = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())