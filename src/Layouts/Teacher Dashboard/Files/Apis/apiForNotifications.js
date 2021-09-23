//getting API for showing all the data
export const getNotifications = () => fetch("https://didactics.one/notifications").then(res => res.json())
export const getNotificationsResponses = () => fetch("https://didactics.one/notifications-response").then(res => res.json())

//getting API for inserting the data
export const createNotifications = (todo) => fetch("https://didactics.one/notifications/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createNotificationsResponses = (todo) => fetch("https://didactics.one/notifications-response/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateNotification = (todo, id) => fetch(`https://didactics.one/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateNotificationResponse = (todo, id) => fetch(`https://didactics.one/notifications-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteNotification = (todo, id) => fetch(`https://didactics.one/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const deleteNotificationResponse = (todo, id) => fetch(`https://didactics.one/notifications-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getNotification = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())
export const getNotificationResponse = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())