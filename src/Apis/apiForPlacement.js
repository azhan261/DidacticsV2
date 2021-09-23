//getting API for showing all the data
export const getPlacement = () => fetch("https://didactics.one/").then(res => res.json())

//getting API for inserting the data
export const createPlacements = (todo) => fetch("https://didactics.one/placements/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePlacement = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getPlacements = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())