//need to connect mongoose

const mongoose = require('mongoose');


//Using mongoose model property to create model for Teacher
//Then, specify the schema of the model i.e, define column names
//We have to pass model name 'Teacher' into the model
//For Crud, we will need to use this structure and their names i.e name,position,office etc

var NotificationResponseSchema = mongoose.model('NotificationResponseSchema', {

    notificationTitle:{ type: String},
    notificationContent: { type: String },
    responseTitle:{ type: String},
    responseContent:{ type: String},


});



//Now we dont to insert a new record called Employee, we need to just insert data
//We export it as an object 

module.exports = { NotificationResponseSchema };
