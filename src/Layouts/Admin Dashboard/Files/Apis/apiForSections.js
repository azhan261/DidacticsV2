/* ---- 
--------------   APIs for Students Training Section Male ----------------------
-------------------------------------------------------------------------------
------ */


export const getStudentsSectionMaleCreate = () => fetch("https://didactics.one/sections/male-schools-adult-create-sections").then(res => res.json())
export const getStudentsSectionMaleSort = () => fetch("https://didactics.one/sections/male-schools-adult-deletefields").then(res => res.json())
export const getStudentsSectionMaleShow = () => fetch("https://didactics.one/sections/male-schools-adult").then(res => res.json())

/* ---
--------------------------------------------------------------------------------
-----*/


/* ---- 
--------------   APIs for Students Training Section Male ----------------------
-------------------------------------------------------------------------------
------ */



/* ---
--------------------------------------------------------------------------------
-----*/



//getting API for inserting the data
export const createTestimonials = (todo) => fetch("https://didactics.one/testimonials/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTestimonials = (todo, id) => fetch(`https://didactics.one/testimonials/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTestimonial = (id) => fetch(`https://didactics.one/testimonials/${id}`).then(res => res.json())