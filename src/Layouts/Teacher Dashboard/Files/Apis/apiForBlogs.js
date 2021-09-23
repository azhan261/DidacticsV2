//getting API for showing all the data
import axios from 'axios';
/*
export const getBlogs = () => fetch("https://didactics.one/blogs").then(res => res.json())
*/

export const getBlogs = item => (
	console.log(item),
	axios.post('https://didactics.one/blogs', item)
		.then(res => res.data, )
		
)

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
export const updateBlog= (todo, id) => fetch(`https://didactics.one/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteBlog= (todo, id) => fetch(`https://didactics.one/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for getting specific data
export const getBlog = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())