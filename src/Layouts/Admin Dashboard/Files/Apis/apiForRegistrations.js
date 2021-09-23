//getting API for showing all the data
export const getRegistrations = () => fetch("https://didactics.one/students").then(res => res.json())


export const getStudentsMale = () => fetch("https://didactics.one/students/male").then(res => res.json())


export const getStudentsFemale = () => fetch("https://didactics.one/students/female").then(res => res.json())


export const getStudentsFemaleSchoolsAdult = () => fetch("https://didactics.one/students/female-schools-adult").then(res => res.json())

export const getStudentsFemaleSchoolsJunior = () => fetch("https://didactics.one/students/female-schools-junior").then(res => res.json())

export const getStudentsMaleSchoolsAdult = () => fetch("https://didactics.one/students/male-schools-adult").then(res => res.json())

export const getStudentsMaleSchoolsJunior = () => fetch("https://didactics.one/students/male-schools-junior").then(res => res.json())

//getting API for inserting the data
export const createRegistrations= (todo) => fetch("https://didactics.one/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateRegistration = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getRegistration = (id) => fetch(`https://didactics.one/students${id}`).then(res => res.json())