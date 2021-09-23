import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { createNotificationsResponses } from '../../Apis/apiForNotifications';
import { updateNotification } from '../../Apis/apiForNotifications';



function CreateNotificationsForTeacher() {
  
        /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const log = (data) => {
      if (editorRef.current) {
        data.notificationTitle = location.state.notificationTitle
        data.notificationContent = location.state.notificationContent
        data.responseContent = editorRef.current.getContent();
        console.log(data, location.state._id)
        updateNotification(data, location.state._id)
        history.push("/notification-list")
      }
  };

  /*useEffect(() => {
    const fetchTodo = async () => {
      const blogstitle = await getPlacementTestblogstitle(`${props.match.params._id}`)
      setblogstitle(blogstitle)
    }
    fetchTodo()
  }, []);
  */
  const onSubmit = async (data) => {
      console.log(data)
    await log(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           notificationTitle:'',
           notificationContent:'',
           responseTitle:'',
           responseContent:'',
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property
        
        validate: values => {
            
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            /*
            if(!values.notificationTitle){
                errors.notificationTitle = "Please enter your Notification's Title"
            
            }
      */
            return errors


        }


    })

    console.log("Form errors", formik.errors)
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
          <Card className="card-plain">
                <CardHeader>Answer Checking Panel</CardHeader>
                <CardBody>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Query Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.notificationTitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Query Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.notificationContent}
                        </div>
                        <hr />
                    </div>
        
                </CardBody>
              </Card>
            <Card className="card-plain">
              <CardHeader>Query Answer Panel</CardHeader>
              <CardBody>
                <div className="container">
                  <div className = "row">
                    <div className = "col-md-12">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
                        
                    <div>
                    <label htmlFor >Query Answer Title</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Response Answer Title" name="responseTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.responseTitle} className="form-control" required  />
                            {/*}
                            {formik.errors.responseTitle && formik.touched.responseTitle ? (<div className='error'>{formik.errors.responseTitle}</div>) : null}
                            */}
                    
                    </div>
                    <div>
                    <label htmlFor className="mt-2">Response Content</label>
                    <Editor
                        apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                        height: 500,
                        browser_spellcheck : true,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    
                    </div>
                    <center>
                      <button type="submit" className="btn btn-dark mt-2">
                        Submit Response
                      </button>
                    </center>
                    </form>
                    </div>
                    </div>
                    </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )



}

export default CreateNotificationsForTeacher
