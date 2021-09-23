import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import { getRegistrations } from '../../../Apis/apiForRegistrations';
import "../../../../SubjectCard.scss"


function ListOfSubjectsForTestForStudent() {
    const [items, setItems] = useState([])
    const location = useLocation();
    const history = useHistory()

    useEffect(() => {
      const fetchItems = async function() {
        const registrations = await getRegistrations()
        setItems(registrations)
       
      }
      fetchItems()
    }, [])
    const handleOnClickEnglish = () => {
        if (items[0].classesGrade == "3"){
          history.push({
            pathname: "/Grade-3-content-test",
            data: items
          })
        }
        else if (items[0].classesGrade == "7"){
          history.push({
            pathname: "/Grade-7-content-test",
            data: items
          })
        }
    }
    return (
      <div className="container-fluid">
      <div>
          
  <>
<div>
 {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
{/* Page Heading */}
<h1 className="h3BlackDashboard mb-2 text-gray-800">List of Subjects For Tests</h1>

{/* DataTales Example */}
<div className="card shadow mb-4">
<div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
<h6 className="m-0 font-weight-bold">Select A Subject</h6>
</div>
<div className="card-body">
<Row className="mt-3">
    <Col md="4 offset-4">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                              English
                            </button>
                          </div>
      </Col>
      </Row>
      
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


      </div>
  </div>
    )
}

export default ListOfSubjectsForTestForStudent
