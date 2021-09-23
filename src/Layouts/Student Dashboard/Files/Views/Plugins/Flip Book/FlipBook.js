
import React, { Component, useRef,useState, useEffect} from 'react'
import HTMLFlipBook from 'react-pageflip';
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import FileUploadNewForTeacherForBook from './FileUploadNew';
import HandWritingDemoStudentsLinguistics from './Demo/HandWritingDemo';
import { getBookContents } from '../../../../../Teacher Dashboard/Files/Apis/apiForBookContent';
import "./index.scss"
import "./main.a8ff09de.chunk.css"



function FlipBookForStudents() {
      
  const location = useLocation();
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getBookContents()
      console.log(contents)
      setItems(contents)
    }
    fetchItems()
  }, []);

  const history = useHistory()
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
                
                 {
                            items.map(contents => (
                                <div className = "page" key={contents._id}>
                                <div className = "mt-5">
                                    {contents.bookContent}
                                </div>
                                </div>
                            ))
                            }
                 
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

export default FlipBookForStudents
