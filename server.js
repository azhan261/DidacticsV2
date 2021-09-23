require("dotenv").config();
const path = require('path');
const logger = require('morgan');
const express = require('express');
const app = express();
const http = require("http")
const config = require('./BackEnd/mern-gridfs-tutorial-master/config');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.listen(9000);

//const server = http.createServer(app)

//Cors

const cors = require('cors');
app.use(cors({ origin: [  'http://localhost:3000','http://localhost:3002','http://localhost:3003','http://localhost:3004','http://localhost:3005',
                          'http://localhost:3005','http://localhost:3006','http://localhost:3007','http://localhost:3008', 'http://localhost:3009',
                          'https://didactics.one'  ]}));



//-----

//Mongoose


//const { mongoose } = require('./db.js');

const { mongoose } = require('./BackEnd/mern-gridfs-tutorial-master/config/index');

//----

//Body Parser


const bodyParser = require('body-parser');

//-----


//----------


//For express file upload plugin

const api = require('./BackEnd/mern-gridfs-tutorial-master/routes/user.routes')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/*
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

*/



app.use('/public', express.static('public'));
/*
app.use('/api', api)
*/

/*
app.listen(4200, () => console.log('Server started at port : 4200'));
*/
/*
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});
*/
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

//-----------------------


//-------------------------------------------------------------------------

//Request statement for the controller

var studentController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/studentController');
var teacherController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/teacherController');
var placementController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/placementController');
var contactController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/contactController');
var personalInfosController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/personalInfoController');
var questionsController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/questionsController');
var coursePlanningController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/coursePlanningController');
var testPlanningController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/testPlanningController');
var placementTestQuestionsController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/placementTestQuestionsController');
var testimonialController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/testimonialController');
var blogController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/blogController');
var route = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Auth/route');
var sectionsSchoolsTrainingAdultMale = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Courses/Schools/sectionsSchoolsTrainingAdultMale');
var answersController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Student Section/answersController');
var classesController = require('./BackEnd/mern-gridfs-tutorial-master/controllers/Classes Section/classesController');
var emailController = require("./BackEnd/mern-gridfs-tutorial-master/email/email.controller");
var notificationController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Notifications/NotificationController")
var notificationResponseController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Notifications/NotificationResponseController")
var bookContoller = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Book Section/bookController")
var faceRecognitionController = require("./BackEnd/mern-gridfs-tutorial-master/controllers/Face Recognition Controller/FaceRecognitionController")

//app.use is a middleware function that uses anything we have required. 

app.use(bodyParser.json());

//------- Email Sending Node Mailer

/* hitted from the onSubmit handler in Landing.js
fetch(`${API_URL}/email`, {
*/

app.post("/email", emailController.collectEmail);

/* Manage state in confirm based on request / check invoked callback request */

app.get("/email/confirm/:id", emailController.confirmEmail);

/* Check all other req*/


//---------------------------S


//app.cors will allow http request to be recieved or given through any plateform, port numbers, etc
//in cors() we pass the url of what we want to connect with which is using a different plateform/port
//the url would be passed as an object
//localhost:4200 is for angular, we wish to connect angular with nodejs through cors

app.use(cors({ origin: 'http://localhost:3000'}));

//Setting up express server through app.listen


const port = process.env.PORT || 9000;
var server = app.listen(port);

console.log(`GridFS tutorial listening on ${port}`);

module.exports = server;


//app.listen(3001, () => console.log('Server started at port : 3001'));

//Adding routers from the controller

// Serve static files from the React app


app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(logger('dev'));
// Put all API endpoints under '/api'
app.use('/api', require('./BackEnd/mern-gridfs-tutorial-master/routes/file'));



app.use('/students', studentController);
app.use('/placements', placementController);
app.use('/teachers', teacherController);
app.use('/contacts', contactController);
app.use('/personalInfos', personalInfosController);
app.use('/questions', questionsController);
app.use('/coursePlannings', coursePlanningController);
app.use('/testPlannings', testPlanningController);
app.use('/placementQuestions', placementTestQuestionsController);
app.use('/testimonials', testimonialController);
app.use('/blogs', blogController);
app.use('/registration', route);
app.use('/sections', sectionsSchoolsTrainingAdultMale);
app.use('/api', api);
app.use('/answers', answersController);
app.use('/classes', classesController);
app.use('/notifications', notificationController);
app.use('/notifications-response', notificationResponseController);
app.use('/flip-book', bookContoller)
app.use('/faceRecognition', faceRecognitionController)



