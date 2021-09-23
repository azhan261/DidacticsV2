//getting API for showing all the data
export const getContacts = () => fetch("https://didactics.one/contacts").then(res => res.json())

//getting API for inserting the data
export const createContacts = (todo) => fetch("https://didactics.one/contacts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateContacts = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getContact = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())