//getting API for showing all the data
export const getBlogs = () => fetch("https://didactics.one/blogs").then(res => res.json())

//getting API for inserting the data
export const createBlogs = (todo) => fetch("https://didactics.one/blogs/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateBlog = (todo, id) => fetch(`https://didactics.one/blogs/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getBlog = (id) => fetch(`https://didactics.one/blogs/${id}`).then(res => res.json())