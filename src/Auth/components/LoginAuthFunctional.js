import React, { useState, useEffect }  from 'react'
import { Link , useHistory, useLocation} from 'react-router-dom';
import LoginService from '../services/LoginService';
import Message from '../elements/Message';
import Error from '../elements/Error';

import { getRegisterationStudents } from '../../Apis/apiForRegistration';


import {
    COMMON_FIELDS,
    REGISTRATION_FIELDS,
    LOGIN_FIELDS,
    LOGIN_MESSAGE,
    ERROR_IN_LOGIN,
  } from '../MessageBundle';

function LoginAuthFunctional() {

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
      const loginResult = await LoginService(data);
      if (loginResult !== 200) {
          setErrorState(true)
          setLoginSuccess(false)
      } else {
          console.log(loginResult)
          setErrorState(false)
          setLoginSuccess(true)
          /*
          console.log(data.email)
          data.id = '612b86db1bc22a07884603aa'
          console.log(data.id)
          */
          console.log("Checking const gettingEmail = await getRegisterationStudents(data.email)")
          const gettingEmail = await getRegisterationStudents(data.email)
          console.log("Checkec and Fullfilled")
          console.log(gettingEmail)
          var idForStudent = gettingEmail[0]._id
          if(gettingEmail[0].status == "Student"){
            console.log("Condition FullFilled for getting specific Student")
            console.log("got it")
            console.log(gettingEmail[0])
            history.push({
              pathname : `/student/studentDashboard/${idForStudent}`,
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
      <h1> Log In As Student</h1>
      <div className="Login"> {' '}
        <form onSubmit={(e) => onSubmit(e)} className="php-email-form">
          <div>
            <div className="form-group mt-3">
                {' '}
                <p>Email</p>
              <input
                type="text"
                name="Username"
                onChange={(e) => handleOnChangeUserName(e)}
                
                required
              />
            </div>{' '}
            {' '}
            <div className="form-group mt-3 text-center">
              {' '}
              <p>Password</p>   {' '}
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
    ); 
        </div>
    )
}

export default LoginAuthFunctional
