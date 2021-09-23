import React, { useState, useEffect }  from 'react'
import { Link , useHistory, useLocation} from 'react-router-dom';
import LoginService from '../services/LoginService';
import LoginServiceTeacher from '../services/LoginServiceTeacher';
import Message from '../elements/Message';
import Error from '../elements/Error';

import { getTeacher } from '../../Apis/apiForTeachers';

import {
    COMMON_FIELDS,
    REGISTRATION_FIELDS,
    LOGIN_FIELDS,
    LOGIN_MESSAGE,
    ERROR_IN_LOGIN,
  } from '../MessageBundle';


function LoginAuthFunctionalTeacher() {
   
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [errorState, setErrorState] = useState(false)
    const [loginSuccessState, setLoginSuccess] = useState(false)
    const history = useHistory()

    const handleOnChangeUserName = (e) => {
        console.log("car")
        setEmailState(e.target.value);
        console.log(emailState)
    };

    
    const handleOnChangePassword = (e) => {
        console.log("bike")
        setPasswordState( e.target.value );
        console.log(passwordState)
        
    };


    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
          email: emailState,
          password: passwordState,
          id : ''
        };
        console.log(data)
        const loginResult = await LoginServiceTeacher(data);
        if (loginResult !== 200) {
            setErrorState(true)
            setLoginSuccess(false)
        } else {
            console.log("Condition at if !== 200, else condition")
            console.log(loginResult)
            setErrorState(false)
            setLoginSuccess(true)
            /*
            console.log(data.email)
            data.id = '612b86db1bc22a07884603aa'
            console.log(data.id)
            */
            console.log("getting the specific teacher with email")
            const gettingEmail = await getTeacher(data.email);
            console.log("Condition fulfilled for getting specific teacher")
            console.log("Checking: const gettingEmail = await getTeacher(data.email)")
            console.log(gettingEmail)
            console.log("Advancing to condition to check Status")
            if(gettingEmail[0].status == "Teacher"){
              console.log("Condition Full Filled")
              console.log(gettingEmail[0]._id)
              var idForTeacher = gettingEmail[0]._id
              
              history.push({
                pathname : `/teacher/teacherDashboard/${idForTeacher}`,
                state: gettingEmail[0]
              })
              
            }
            else{
              console.log("not got it")
            }
            //history.push("/home")
            console.log("Error not hit")
        }
    };





    return (
      <div>
      <section id="hero" className="text-center">
      <div className="container mt-5" data-aos="fade-up">
      <h1> Log In As Teacher</h1>
      <div className="Login"> {' '}
        <form onSubmit={(e) => onSubmit(e)} className="php-email-form">
          <div>
            <div className="form-group mt-3">
              
              <p>Email</p>    {' '}
              <input
                type="text"
                name="Username"
                onChange={(e) => handleOnChangeUserName(e)}
   
                required
              />
            </div>{' '}
            {' '}
            <div className="form-group mt-3">
              {' '}
              <p>Password</p>    {' '}
              <input
                type="password"
                name="Password"
                onChange={(e) => handleOnChangePassword(e)}

                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            <div className="buttons form-group mt-3">
              {' '}
              <button
                type="button"
                onClick={(e) => onSubmit(e)}
                className="btn btn-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>
              <div className="form-group mt-3">
                  <Link to="/registration">
                     {REGISTRATION_FIELDS.REGISTER} 
                  </Link>
                  <div  className="form-group mt-3"> 
                  <Link to="/main/reset-password-confirmation">
                     Forgot your password? 
                  </Link>
                  </div> 
              </div>
               {' '}
            </div>{' '}
               {' '}
          </div>{' '}
           {' '}
        </form>{' '}
            {loginSuccessState && <Message message={LOGIN_MESSAGE}  />}    {' '}
        {errorState && <Error message={ERROR_IN_LOGIN} />}    {' '}
      </div>
      </div>
      </section>
     
        </div>
    )
}

export default LoginAuthFunctionalTeacher
