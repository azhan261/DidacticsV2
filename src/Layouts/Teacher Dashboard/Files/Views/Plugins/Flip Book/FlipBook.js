
import React, { Component, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip';
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import FileUploadNewForTeacherForBook from './FileUploadNew';
import HandWritingDemoStudentsLinguistics from './Demo/HandWritingDemo';
import { createBookContents } from '../../../Apis/apiForBookContent';
import "./index.scss"
import "./main.a8ff09de.chunk.css"
import { createBlogs } from '../../../Apis/apiForBlogs';


function FlipBook() {
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
        data.bookContent = editorRef.current.getContent();
        console.log(data)
        createBookContents(data)
        //history.push("/teacher/blog-list")
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
           bookContent:'',
           teacherId:'',
           studentId: '',
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
            
            
      
            return errors


        }


    })
    const onCreateBlog = (e) => {
      e.preventDefault()
      history.push("/teacher/create-blog")
    }
    console.log("Form errors", formik.errors)
    return (
        <div>
                       <div>
             
             <div>
 <div className = "mt-5 pt-4">
 {/* Content Wrapper */}
 <div id="content-wrapper" className="d-flex flex-column">
 {/* Main Content */}
 <div id="content">
   {/* Begin Page Content */}
   <div className="containerBlackDashboard-fluid">
     {/* Page Heading */}
     <h1 className="h3BlackDashboard mb-2 text-gray-800">Books</h1>
     {/* DataTales Example */}
     <div className="card shadow mb-4 text-center">
       <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
         <h6 className="m-0 font-weight-bold text-white"></h6>
       </div>
       <div className="card-body">
       <h1 id = "checking" className="h3BlackDashboard mb-2 text-gray-800"></h1>
 
       </div>
       <HTMLFlipBook
             width={550}
             height={733}
             size="stretch"
             minWidth={315}
             maxWidth={1000}
             minHeight={400}
             maxHeight={1533}
             maxShadowOpacity={0.5}
             showCover={true}
             mobileScrollSupport={true}
             >
                 <div className="page page-cover" data-density="hard">
                     <div className="page-content">
                     <h2>Page Cover</h2>
                     </div>
                 </div>
                 <div className="page">
                     <div>
                   
                     </div>
                 </div>
                 <div className="page">
                <div className = "mt-5">
                    <FileUploadNewForTeacherForBook />
                </div>
                <hr />
                <form onSubmit={formik.handleSubmit}>
                                
                            
                                <div className = "mt-5">
                              
                                <Editor
                                    apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue=""
                                    init={{
                                    height: 200,
                                    browser_spellcheck : true,
                                    menubar: true,
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
                                <div className="containerSass mt-4 mb-3">
                                  <button type="submit" className="btnSass play-pause buttonSass" style = {{fontWeight : "bold" }} >
                                    Create Content
                                  </button>
                                </div>
                                </center>
                                <hr />
                                </form>
             
                     
                     </div>
                 <div className="page">Page 3</div>
                 <div className="page">Page 4</div>
             </HTMLFlipBook>
     </div>
   </div>
   {/* /.containerBlackDashboard-fluid */}
 </div>
 {/* End of Main Content */}
 {/* Footer */}
 <footer className="sticky-footer bg-white">
   <div className="containerBlackDashboard my-auto">
     <div className="copyright text-center my-auto">
       <span>Copyright © Logistics 2021</span>
     </div>
   </div>
 </footer>

 {/* End of Footer */}
 </div>
 {/* End of Content Wrapper */}
 {/* End of Page Wrapper */}
       </div>
       </div>
     </div>
        </div>
    )
}

export default FlipBook
