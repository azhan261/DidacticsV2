
//------ Layout Files -----------//

import MainLayout from './Layouts/Main Theme/MainLayout';
import AdminDashboardLayout from './Layouts/Admin Dashboard/AdminDashboardLayout';
import TeacherDashboardLayout from './Layouts/Teacher Dashboard/TeacherDashboardLayout';
import StudentDashboardLayout from './Layouts/Student Dashboard/StudentDashboardLayout';


// ---------------Main Files ------------//
import logo from './logo.svg';
//import './App.css';
import Home from './Views/Home';
import AppFeatures from './Views/AppFeatures';
import Details from './Views/Details';
import Gallery from './Views/Gallery';
import Pricing from './Views//Pricing';
import Testimonial from './Views/Testimonial';
import FAQ from './Views/FAQ';
import Contact from './Views/Contact';
import Registration from './Views/Registration';
import TeachersRegistration from './Views/TeachersRegistration';
import LoginAuthFunctional from './Auth/components/LoginAuthFunctional';
import LoginAuthFunctionalTeacher from './Auth/components/LoginAuthFunctionalTeacher';
import LoginAuthFunctionalAdmin from './Auth/components/LoginAuthFunctionalAdmin';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom' 
import CheckingNavBar from './Views/CheckingNavBar';

// ---------- Admin Dashboard Files ------//

//import './App.css';
import SidebarForAdmin from './Layouts/Admin Dashboard/Files/Views/Sidebar';
import ContactsForAdmin from './Layouts/Admin Dashboard/Files/Contacts/Contacts';
import ViewContactDetailsForAdmin from './Layouts/Admin Dashboard/Files/Contacts/ViewContactDetails';
import AnswerQueryForAdmin from './Layouts/Admin Dashboard/Files/Contacts/AnswerQuery';
import PersonalInfoDataForAdmin from './Layouts/Admin Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResultsForAdmin from './Layouts/Admin Dashboard/Files/Views/PlacementTestResults'
import RegistrationDataForAdmin from './Layouts/Admin Dashboard/Files/Views/RegistrationsData'
import TeacherDataForAdmin from './Layouts/Admin Dashboard/Files/Views/TeacherData'
import ViewQuestionsStudentsForAdmin from './Layouts/Admin Dashboard/Files/Views/ViewQuestionsStudents'
import CreatePlacementTestForAdmin from './Layouts/Admin Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsForAdmin from './Layouts/Admin Dashboard/Files/Views/PlacementQuestionDetails';
import BlogsForAdmin from './Layouts/Admin Dashboard/Files/Views/Blogs';
import ClassesForAdmin from './Layouts/Admin Dashboard/Files/Views/Classes';
import AdmissionTestQAForAdmin from './Layouts/Admin Dashboard/Files/Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestQA';
import AdmissionTestBlanksForAdmin from './Layouts/Admin Dashboard/Files/Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestBlanks';
import AdmissionTestPronunciationForAdmin from './Layouts/Admin Dashboard/Files/Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestPronunciation';
import AdmissionTestMCQForAdmin from './Layouts/Admin Dashboard/Files/Admission Test Content Section/Content Section/Question Creation/Text/AdmissionTestMCQ';


// -------- Teacher Dashboard Files ------------//

//import "./App.css"
import Sidebar from './Layouts/Teacher Dashboard/Files/Views/Sidebar';
import SidebarForTeacher from './Layouts/Teacher Dashboard/Files/Views/Sidebar';
import ContactDetailsForTeacher from './Layouts/Teacher Dashboard/Files/Views/ContactDetails'
import PersonalInfoDataForTeacher from './Layouts/Teacher Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResultsForTeacher from './Layouts/Teacher Dashboard/Files/Views/PlacementTestResults'
import RegistrationDataForTeacher from './Layouts/Teacher Dashboard/Files/Views/RegistrationsData'
import TeacherDataForTeacher from './Layouts/Teacher Dashboard/Files/Views/TeacherData'
import ViewQuestionsStudentsForTeacher from './Layouts/Teacher Dashboard/Files/Views/ViewQuestionsStudents'
import CreatePlacementTestForTeacher from './Layouts/Teacher Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsForTeacher from './Layouts/Teacher Dashboard/Files/Views/PlacementQuestionDetails';
import CoursePlanningContentForTeacher from './Layouts/Teacher Dashboard/Files/Views/CoursePlanningContent';
import CourseContentForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/CourseContentForTest";
import CoursePlanningContentDetailsForTeacher from './Layouts/Teacher Dashboard/Files/Views/CoursePlanningContentDetails';
import BlogForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/Blog';
import BlogListForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/BlogList';
import CurrentBlogViewForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/CurrentBlogView';
import EditBlogForTeacher from './Layouts/Teacher Dashboard/Files/Views/Blogs/EditBlog';
import VideoChatForTeacher from './Layouts/Teacher Dashboard/Files/Views/Plugins/VideoChat';
import CourseContentAdultTextQAForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultTextQA';
import CourseContentAdultMCQForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultMCQ';
import CourseContentAdultBlanksForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultBlanks';
import CourseContentAdultHandwritingForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultHandwriting';
import PronunciationForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/Pronunciation';
import CourseContentAdultBlanksForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultBlanks";
import CourseContentAdultMCQForTestForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultMCQ';
import CourseContentAdultTextForTestForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultTextQA';
import CourseContentAdultHandwritingForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/CourseContentAdultHandwriting";
import PronunciationForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/For Tests/Pronunciation";
import EditContentQAForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentQA';
import EditContentMCQForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentMCQ';
import EditContentBlanksForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentBlanks';
import EditContentPronunciationForTeacher from './Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentPronunciation';
import ViewContentListForTeacher from './Layouts/Teacher Dashboard/Files/Views/ViewContentList';
import ContainerForTeacher from './Layouts/Teacher Dashboard/Files/Views/Plugins/White Board/components/container/Container';
import AudioVideoRecorderForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Plugins/Audio Recording/AudioVideoRecorder";
import ListOfClassesForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/ListOfClasses";
import Grade1ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade1Content";
import Grade2ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade2Content";
import Grade3ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade3Content";
import Grade4ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade4Content";
import Grade5ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade5Content";
import Grade6ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade6Content";
import Grade7ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade7Content";
import Grade8ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade8Content";
import Grade9ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade9Content";
import Grade10ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade10Content";
import Grade11ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade11Content";
import Grade12ContentForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes Section/Grade12Content";
import ListOfClassesForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/ListOfClassesForTest";
import Grade1ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade1ContentTest";
import Grade2ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade2Content";
import Grade3ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade3Content";
import Grade4ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade4Content";
import Grade5ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade5Content";
import Grade6ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade6Content";
import Grade7ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade7Content";
import Grade8ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade8Content";
import Grade9ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade9Content";
import Grade10ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade10Content";
import Grade11ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade11Content";
import Grade12ContentTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/List Of Classes For Test Section/Grade12Content";
import ResultsCategoryForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/ResultCategory";
import ViewAnswersForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/ViewAnswers";
import ListOfClassesForResultsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/ListOfClassesForResults";
import Grade1ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 1 Content and Answers/Grade1Content";
import Grade2ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 2 Content and Answers/Grade2Content";
import Grade3ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 3 Content and Answers/Grade3Content";
import Grade4ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 4 Content and Answers/Grade4Content";
import Grade5ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 5 Content and Answers/Grade5Content";
import Grade6ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 6 Content and Answers/Grade6Content";
import Grade7ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 7 Content and Answers/Grade7Content";
import Grade8ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 8 Content and Answers/Grade8Content";
import Grade9ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 9 Content and Answers/Grade9Content";
import Grade10ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 10 Content and Answers/Grade10Content";
import Grade11ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 11 Content and Answers/Grade11Content";
import Grade12ContentForResultsForSubjectsForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 12 Content and Answers/Grade12Content";
import Grade1ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 1 Content and Answers/Grade1ContentAnswers";
import Grade2ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 2 Content and Answers/Grade2ContentAnswers";
import Grade3ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 3 Content and Answers/Grade3ContentAnswers";
import Grade4ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 4 Content and Answers/Grade4ContentAnswers";
import Grade5ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 5 Content and Answers/Grade5ContentAnswers";
import Grade6ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 6 Content and Answers/Grade6ContentAnswers";
import Grade7ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 7 Content and Answers/Grade7ContentAnswers";
import Grade8ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 8 Content and Answers/Grade8ContentAnswers";
import Grade9ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 9 Content and Answers/Grade9ContentAnswers";
import Grade10ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 10 Content and Answers/Grade10ContentAnswers";
import Grade11ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 11 Content and Answers/Grade11ContentAnswers";
import Grade12ContentAnswersForTeacher   from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Grade 12 Content and Answers/Grade12ContentAnswers";
import ListOfClassesForResultsOfTests from "./Layouts/Teacher Dashboard/Files/Views/Results/ListOfClassesForResultsOfTests";
import Grade1ContentTestForResultsForTestForTeacher from './Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade1ContentTest';
import Grade2ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade3ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade4ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade5ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade6ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade7ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade8ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade9ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade10ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade11ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import Grade12ContentTestForResultsForTestForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Tests For Results/Grade2Content";
import ViewResultQAAnswerTypeForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Results/List Of Grades For Subjects For Results/Answer Types/Text Based/QA/ViewResultQAAnswerType";
import ViewAnswersBlanksForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersBlanks";
import ViewAnswersMCQForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersMCQ";
import ViewAnswersPronunciationForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersPronunciation";
import ViewAnswersQAForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersQA";
import ViewAnswersHandWritingForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersHandWriting";
import KeyboardUrduForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Plugins/Virtual Key Board/KeyboardUrdu";
import NotificationListForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Notifications/NotificationList";
import AnswerQueryForTeacher from "./Layouts/Teacher Dashboard/Files/Views/Notifications/AnswerQuery";
import FileUploadNewForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/File Upload/FileUploadNew';
import FaceRecognition from './Layouts/Teacher Dashboard/Files/Views/Plugins/FaceRecognition';
import FlipBook from './Layouts/Teacher Dashboard/Files/Views/Plugins/Flip Book/FlipBook';

// ----------- Student Dashboard Files -----------//
//import './App.css';
import HomeForStudent from './Layouts/Student Dashboard/Files/Views/Home';
import SidebarForStudent from './Layouts/Student Dashboard/Files/Views/Sidebar';
import ContactDetailsForStudent from './Layouts/Student Dashboard/Files/Views/ContactDetails'
import PersonalInfoDataForStudent from './Layouts/Student Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResultsForStudent from './Layouts/Student Dashboard/Files/Views/PlacementTestResults'
import RegistrationDataForStudent from './Layouts/Student Dashboard/Files/Views/RegistrationsData'
import TeacherDataForStudent from './Layouts/Student Dashboard/Files/Views/TeacherData'
import ViewQuestionsStudentsForStudent from './Layouts/Student Dashboard/Files/Views/ViewQuestionsStudents'
import ViewInvoiceForStudent from './Layouts/Student Dashboard/Files/Views/ViewInvoice'
import NotificationsForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/Notifications';
import CreateNotificationsForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/CreateNotification';
import NotificationListForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/NotificationList';
import EditNotificationForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/EditNotification';
import CurrentNotificationViewForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/CurrentNotificationView';
import ViewQueryResponseForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/ViewQueryResponse';
import CreatePlacementTestForStudent from './Layouts/Student Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsForStudent from './Layouts/Student Dashboard/Files/Views/PlacementQuestionDetails';
import CoursePlanningContentForStudent from './Layouts/Student Dashboard/Files/Views/CoursePlanningContent';
import TestimonialsForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/Testimonials';
import TestimonialListForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/TestimonialList';
import EditTestimonialForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/EditTestimonial';
import CurrentTestimonialViewForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/CurrentTestimonialView';
import AudioToTextForStudent from './Layouts/Student Dashboard/Files/Views/Plugins/AudioToText';
import CourseContentForStudent from "./Layouts/Student Dashboard/Files/Views/CourseContent";
import ListOfSubjectsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/ListOfSubjects';
import QAForStudent from "./Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/QA";
import HandwritingForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Handwriting';
import MCQForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/MCQ';
import FillInTheBlanksForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/FillInTheBlanks';
import PronunciationForStudent from "./Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Pronunciation"
import QAForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/QAForTests';
import HandwritingForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/HandwritingForTests';
import MCQForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/MCQForTests';
import FillInTheBlankForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/FillInTheBlankForTests';
import PronunciationForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/PronunciationForTests';
import AnswersForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Answers';
import AnswersMCQForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersMCQ';
import AnswersFillInTheBlankForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersFillInTheBlank';
import AnswerPronunciationForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswerPronunciation';
import AnswerVideoForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswerVideo';
import ResultsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Results';
import FileUploadTestingForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/File Uploads/FileUploadTesting';
import Grade1ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade1Content';
import Grade2ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade2Content';
import Grade3ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade3Content';
import Grade4ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade4Content';
import Grade5ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade5Content';
import Grade6ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade6Content';
import Grade7ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade7Content';
import Grade8ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade8Content';
import Grade9ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade9Content';
import Grade10ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade11Content';
import Grade11ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade11Content';
import Grade12ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade12Content';
import Grade1ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade1ContentTest';
import Grade2ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade2ContentTest';
import Grade3ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade3Content';
import Grade4ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade4Content';
import Grade5ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade5Content';
import Grade6ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade6Content';
import Grade7ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade7Content';
import Grade8ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade8Content';
import Grade9ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade9Content';
import Grade10ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade10Content';
import Grade11ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade11Content';
import Grade12ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade12Content';
import ListOfSubjectsForTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/ListOfClassesForTest';
import FaceRecognitionForStudents from './Layouts/Student Dashboard/Files/Views/Plugins/FaceRecognition';
import FlipBookForStudents from './Layouts/Student Dashboard/Files/Views/Plugins/Flip Book/FlipBook';
import Testing from './Layouts/Student Dashboard/Files/Views/Python Plugins/Testing';
//import BaloonMathGame from './Layouts/Student Dashboard/Files/Views/Gamification Games/Baloon Math/BaloonMathGame';

function App() {
  return (
    <div className="App">
      <div>
       <Router>
        <Switch>
          <Route exact path="/"><Redirect to="/home" /></Route> 
          <MainLayout exact path="/home" component={Home} />
          <Route path = "/main/pythonTesting" component = {Testing} />
          <MainLayout exact path="/main/app-features" component={AppFeatures} />
          <MainLayout exact path="/main/details" component={Details} />
          <MainLayout exact path="/main/gallery" component={Gallery} />
          <MainLayout exact path="/main/pricing" component={Pricing} />
          <MainLayout exact path="/main/testimonial" component={Testimonial} />
          <MainLayout exact path="/main/faq" component={FAQ} />
          <MainLayout exact path="/main/contact" component={Contact} />
          <MainLayout exact path="/main/registration" component={Registration} />
          <MainLayout exact path="/main/teacher-registration" component={TeachersRegistration} />
          <MainLayout exact path="/main/login-auth-student" component={LoginAuthFunctional} />
          <MainLayout exact path="/main/login-auth-teacher" component={LoginAuthFunctionalTeacher} />
          <Route path="/main/abc" component={CheckingNavBar} />
        </Switch>
      </Router>
      </div>
      <div>
      <Router>
      <Switch>
           <AdminDashboardLayout path="/admin/contacts/:id" component={ContactsForAdmin} /> 
           <AdminDashboardLayout path="/admin/view-contact-details/:id" component={ViewContactDetailsForAdmin} /> 
           <AdminDashboardLayout path="/admin/answer-query/:id" component={AnswerQueryForAdmin} /> 
           <AdminDashboardLayout path="/admin/personal-info/:id" component={PersonalInfoDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/placement-results/:id" component={PlacementTestResultsForAdmin} /> 
           <AdminDashboardLayout path="/admin/registration-data/:id" component={RegistrationDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/teachers-data/:id" component={TeacherDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/questions-list/:id" component={ViewQuestionsStudentsForAdmin} /> 
           <AdminDashboardLayout path="/admin/create-placement-test/:id" component={CreatePlacementTestForAdmin} /> 
           <AdminDashboardLayout path="/admin/placement-question-details/:id" component={PlacementQuestionDetailsForAdmin} /> 
           <AdminDashboardLayout path="/admin/blogs/:id" component={BlogsForAdmin} />
           <AdminDashboardLayout path="/admin/classes/:id" component={ClassesForAdmin} />
      </Switch>
      </Router>
      </div>
      <div>
      <Router>
      <Switch>
      <TeacherDashboardLayout path="/teacher/contact/:id" component={ContactDetailsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/personal-info/:id" component={PersonalInfoDataForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/placement-results/:id" component={PlacementTestResultsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/registration-data/:id" component={RegistrationDataForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/teachers-data/:id" component={TeacherDataForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/questions-list/:id" component={ViewQuestionsStudentsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/create-placement-test/:id" component={CreatePlacementTestForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/placement-question-details/:id" component={PlacementQuestionDetailsForTeacher} /> 
      <TeacherDashboardLayout path="/teacher/course-planning-content/:id" component={CoursePlanningContentForTeacher}/>
      <TeacherDashboardLayout path="/teacher/course-planning-content-test/:id" component={CourseContentForTestForTeacher}/>
      <TeacherDashboardLayout path="/teacher/course-planning-content-detatails/:id" component={CoursePlanningContentDetailsForTeacher}/>
      <TeacherDashboardLayout path="/teacher/create-blog/:id" component={BlogForTeacher} />
      <TeacherDashboardLayout path="/teacher/blog-list/:id" component={BlogListForTeacher} />
      <TeacherDashboardLayout path="/teacher/current-blog-view/:id" component={CurrentBlogViewForTeacher} />
      <TeacherDashboardLayout path="/teacher/edit-current-blog/:id" component={EditBlogForTeacher} />
      <TeacherDashboardLayout path="/teacher/videochat/:id" component={VideoChatForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-qa/:id" component={CourseContentAdultTextQAForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-mcq/:id" component={CourseContentAdultMCQForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-blanks/:id" component={CourseContentAdultBlanksForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-pronunciation/:id" component={PronunciationForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-qa-test/:id" component={CourseContentAdultTextForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-mcq-test/:id" component={CourseContentAdultMCQForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-blanks-test/:id" component={CourseContentAdultBlanksForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-text-pronunciation-test/:id" component={PronunciationForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/adult-course-content-file-upload/:id" component={FileUploadNewForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-question-type-qa-edit/:id" component={EditContentQAForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-question-answer-type-mcq-edit/:id" component={EditContentMCQForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-question-answer-type-blanks-edit/:id" component={EditContentBlanksForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-question-answer-type-pronunciation-edit/:id" component={EditContentPronunciationForTeacher} />
      <TeacherDashboardLayout path="/teacher/content-list/:id" component={ViewContentListForTeacher} />
      <TeacherDashboardLayout path="/teacher/white-board/:id" component={ContainerForTeacher} />
      <TeacherDashboardLayout path="/teacher/audio-record/:id" component={AudioVideoRecorderForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes/:id" component={ListOfClassesForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content/:id" component={Grade1ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content/:id" component={Grade2ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content/:id" component={Grade3ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content/:id" component={Grade4ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content/:id" component={Grade5ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content/:id" component={Grade6ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content/:id" component={Grade7ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content/:id" component={Grade8ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content/:id" component={Grade9ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content/:id" component={Grade10ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content/:id" component={Grade11ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content/:id" component={Grade12ContentForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes-test/:id" component={ListOfClassesForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-test/:id" component={Grade1ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-test/:id" component={Grade2ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-test/:id" component={Grade3ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-test/:id" component={Grade4ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-test/:id" component={Grade5ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-test/:id" component={Grade6ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-test/:id" component={Grade7ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-test/:id" component={Grade8ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-test/:id" component={Grade9ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-test/:id" component={Grade10ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-test/:id" component={Grade11ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-test/:id" component={Grade12ContentTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/results-category/:id" component={ResultsCategoryForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes-subject-results/:id" component={ListOfClassesForResultsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-results/:id" component={Grade1ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-results/:id" component={Grade2ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-results/:id" component={Grade3ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-results/:id" component={Grade4ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-results/:id" component={Grade5ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-results/:id" component={Grade6ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-results/:id" component={Grade7ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-results/:id" component={Grade8ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-results/:id" component={Grade9ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-results/:id" component={Grade10ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-results/:id" component={Grade11ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-results/:id" component={Grade12ContentForResultsForSubjectsForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-results-answers/:id" component={Grade1ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-results-answers/:id" component={Grade2ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-results-answers/:id" component={Grade3ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-results-answers/:id" component={Grade4ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-results-answers/:id" component={Grade5ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-results-answers/:id" component={Grade6ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-results-answers/:id" component={Grade7ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-results-answers/:id" component={Grade8ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-results-answers/:id" component={Grade9ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-results-answers/:id" component={Grade10ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-results-answers/:id" component={Grade11ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-results-answers/:id" component={Grade12ContentAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/list-of-classes-test-results/:id" component={ListOfClassesForResultsOfTests} />
      <TeacherDashboardLayout path="/teacher/Grade-1-content-test-results/:id" component={Grade1ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-2-content-test-results/:id" component={Grade2ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-3-content-test-results/:id" component={Grade3ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-4-content-test-results/:id" component={Grade4ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-5-content-test-results/:id" component={Grade5ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-6-content-test-results/:id" component={Grade6ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-7-content-test-results/:id" component={Grade7ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-8-content-test-results/:id" component={Grade8ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-9-content-test-results/:id" component={Grade9ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-10-content-test-results/:id" component={Grade10ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-11-content-test-results/:id" component={Grade11ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/Grade-12-content-test-results/:id" component={Grade12ContentTestForResultsForTestForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-result-qa-answer-type/:id" component={ViewResultQAAnswerTypeForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-answers-subject/:id" component={ViewAnswersForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-answers-mcq/:id" component={ViewAnswersMCQForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-answers-blanks/:id" component={ViewAnswersBlanksForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-answers-qa/:id" component={ViewAnswersQAForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-answers-handwriting/:id" component={ViewAnswersHandWritingForTeacher} />
      <TeacherDashboardLayout path="/teacher/view-answers-pronunciation/:id" component={ViewAnswersPronunciationForTeacher} />
      <TeacherDashboardLayout path="/teacher/keyboard/:id" component={KeyboardUrduForTeacher} />
      <TeacherDashboardLayout path="/teacher/notification-list/:id" component={NotificationListForTeacher} />
      <TeacherDashboardLayout path="/teacher/notification-answer/:id" component={AnswerQueryForTeacher} />
      <TeacherDashboardLayout path="/teacher/fileupload-new/:id" component={FileUploadNewForTeacher} />
      <TeacherDashboardLayout path="/teacher/facerecognition/:id" component={FaceRecognition} />
      <TeacherDashboardLayout path="/teacher/flip-book/:id" component={FlipBook} />
      </Switch>
      </Router>
      </div>
      <div>
      <Router>
      <Switch>
      <StudentDashboardLayout exact path="/student/:id" component={HomeForStudent} /> 
              <StudentDashboardLayout path="/student/contact/:id" component={ContactDetailsForStudent} /> 
              <StudentDashboardLayout path="/student/personal-info/:id" component={PersonalInfoDataForStudent} /> 
              <StudentDashboardLayout path="/student/placement-results/:id" component={PlacementTestResultsForStudent} /> 
              <StudentDashboardLayout path="/student/registration-data/:id" component={RegistrationDataForStudent} /> 
              <StudentDashboardLayout path="/student/teachers-data/:id" component={TeacherDataForStudent} /> 
              <StudentDashboardLayout path="/student/notifications/:id" component={NotificationsForStudent} /> 
              <StudentDashboardLayout path="/student/create-notifications/:id" component={CreateNotificationsForStudent} /> 
              <StudentDashboardLayout path="/student/notification-list/:id" component={NotificationListForStudent} /> 
              <StudentDashboardLayout path="/student/notification-response/:id" component={ViewQueryResponseForStudent} /> 
              <StudentDashboardLayout path="/student/invoice/:id" component={ViewInvoiceForStudent} /> 
              <StudentDashboardLayout path="/student/questions-list/:id" component={ViewQuestionsStudentsForStudent} /> 
              <StudentDashboardLayout path="/student/create-placement-test/:id" component={CreatePlacementTestForStudent} /> 
              <StudentDashboardLayout path="/student/placement-question-details/:id" component={PlacementQuestionDetailsForStudent} /> 
              <StudentDashboardLayout path="/student/course-planning-question-details/:id" component={CoursePlanningContentForStudent} /> 
              <StudentDashboardLayout path="/student/testimonials-creation/:id" component={TestimonialsForStudent} />
              <StudentDashboardLayout path="/student/testimonial-list/:id" component={TestimonialListForStudent} />
              <StudentDashboardLayout path="/student/edit-current-testimonial/:id" component={EditTestimonialForStudent} />
              <StudentDashboardLayout path="/student/current-testimonial-view/:id" component={CurrentTestimonialViewForStudent} />
              <StudentDashboardLayout path="/student/audiototext/:id" component={AudioToTextForStudent} />
              <StudentDashboardLayout path="/student/course-content/:id" component={CourseContentForStudent} />
              <StudentDashboardLayout path="/student/list-of-subjects/:id" component={ListOfSubjectsForStudent} />
              <StudentDashboardLayout path="/student/list-of-subjects-for-test/:id" component={ListOfSubjectsForTestForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-qa/:id" component={QAForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-handwriting/:id" component={HandwritingForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-mcq/:id" component={MCQForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-blanks/:id" component={FillInTheBlanksForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-pronunciation/:id" component={PronunciationForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-video/:id" component={AnswerVideoForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-qa-test/:id" component={QAForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-handwriting-test/:id" component={HandwritingForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-mcq-test/:id" component={MCQForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-blanks-test/:id" component={FillInTheBlankForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-pronunciation-test/:id" component={PronunciationForTestsForStudent} />
              <StudentDashboardLayout path="/student/Grade-1-content/:id" component={Grade1ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-2-content/:id" component={Grade2ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-3-content/:id" component={Grade3ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-4-content/:id" component={Grade4ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-5-content/:id" component={Grade5ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-6-content/:id" component={Grade6ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-7-content/:id" component={Grade7ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-8-content/:id" component={Grade8ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-9-content/:id" component={Grade9ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-10-content/:id" component={Grade10ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-11-content/:id" component={Grade11ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-12-content/:id" component={Grade12ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-1-content-test/:id" component={Grade1ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-2-content-test/:id" component={Grade2ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-3-content-test/:id" component={Grade3ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-4-content-test/:id" component={Grade4ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-5-content-test/:id" component={Grade5ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-6-content-test/:id" component={Grade6ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-7-content-test/:id" component={Grade7ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-8-content-test/:id" component={Grade8ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-9-content-test/:id" component={Grade9ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-10-content-test/:id" component={Grade10ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-11-content-test/:id" component={Grade11ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-12-content-test/:id" component={Grade12ContentTestForStudent} />
              <StudentDashboardLayout path="/student/answer-list/:id" component={ResultsForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer/:id" component={AnswersForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer-mcq/:id" component={AnswersMCQForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer-blanks/:id" component={AnswersFillInTheBlankForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer-pronunciation/:id" component={AnswerPronunciationForStudent} />
              <StudentDashboardLayout path="/student/testing/:id" component={FileUploadTestingForStudent} />
              <StudentDashboardLayout path="/student/facerecognition/:id" component={FaceRecognitionForStudents} />
              <StudentDashboardLayout path="/student/flip-book/:id" component={FlipBookForStudents} />
              <Route path = "/pythonTesting" component = {Testing} />
              {/*}
              <Route path="/baloon-math-test" component={BaloonMathGame} />
              */}
            </Switch>
            </Router>       
      </div>
    </div>
    
  );
}

export default App;
