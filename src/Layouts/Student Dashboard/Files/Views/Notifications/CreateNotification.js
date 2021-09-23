import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { createNotifications } from '../../Apis/apiForNotifications';
import FilesUploadComponent from './File Upload/filesUploadComponent';
import ModalTest from './Modals/ModalTest';


function CreateNotificationsForStudent() {
  
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
        data.notificationContent = editorRef.current.getContent();
        console.log(data)
        createNotifications(data)
        //history.push("/notification-list")
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
    await log(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           notificationTitle:'',
           notificationContent:'',
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
            
            if(!values.notificationTitle){
                errors.notificationTitle = "Please enter your Notification's Title"
            
            }
      
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
              <CardHeader>Notification Creation Panel</CardHeader>
              <CardBody>
                <div className="container">
                  <div className = "row">
                    <div className = "col-md-12">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
                        
                    <div>
                    <label htmlFor >Title</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Notification's Title" name="notificationTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.notificationTitle} className="form-control" required  />
                            {formik.errors.notificationTitle && formik.touched.notificationTitle ? (<div className='error'>{formik.errors.notificationTitle}</div>) : null}
                    
                    </div>
                    <div className = "mt-2">
                       <FilesUploadComponent />
                    </div>
                    <div>
                     <button type="button" id="bntRecordVideo" className="btn btn-dark"><ModalTest /></button>
                    </div>
                    <div>
                    <label htmlFor className="mt-2">Notification Content</label>
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
                        Create Notification
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

export default CreateNotificationsForStudent
