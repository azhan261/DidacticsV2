import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getTestimonials, deleteTestimonial } from "../../Apis/apiForTestimonials"
import "../../../ButtonStyleOriginalSass.scss"

function TestimonialListForStudent() {
   
    const [items, setItems] = useState([])
    var serialNumber = 0
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getTestimonials()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClickEdit = (data) => {
      history.push({
        pathname:"/student/edit-current-testimonial",
        state: data
      })
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://didactics.one/testimonials/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname:"/student/current-testimonial-view",
        state: data
      })
    }
    const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
      <td>{serialNumber}</td>
  )
}
const onCreateBlog = (e) => {
  e.preventDefault()
  history.push("/student/testimonials-creation")
}
    return  (
          <>
      <div>
       {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
  {/* Page Heading */}
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Testimonials</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
      <h6 className="m-0 font-weight-bold">List of User Created Testimonialss</h6>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
        <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Testimonial Title</th>
                              <th colSpan="3">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}
                                  <td>
                                      {contents.testimonialTitle}
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" onClick={() => handleOnClickView(contents)}>View</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-light"  onClick={() => handleOnClickEdit(contents)}>Edit Testimonial</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" onClick={() => handleOnClickDelete(contents)}>Delete Testimonial</button>
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>
        </table>
        <center>
                    <div>    
                    <div className="containerTestimonialButton mb-3">
                      <button className="btnTestimonialButton play-pause buttonTestimonialButton" style = {{fontWeight : "bold" }} onClick = {(e) => onCreateBlog(e)}>
                        Create Testimonial
                      </button>
                    </div>
                    <a href= "https://didactics.one/">Testing</a>
                  </div>
                  </center>
      </div>
    </div>
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
    </>
    )
}

export default TestimonialListForStudent
