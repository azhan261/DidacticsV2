import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getTestPlanningsForGrade8 } from '../../Apis/apiForTestContentPlanning';

function Grade8ContentTestForTeacher() {
     
  
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getTestPlanningsForGrade8()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClickEdit = (data) => {
      history.push({
        pathname:"/view-question-type-qa-edit",
        state: data
      })
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://didactics.one/testPlannings/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    
    return (
      
        <>
      <div>
       {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
  {/* Page Heading */}
  <h1 className="h3BlackDashboard mb-2 text-gray-800">Course Test</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
      <h6 className="m-0 font-weight-bold">List of Test related Questions</h6>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
        <thead>
                              <tr>
                              <th>Grade</th>
                              <th>Subject Name</th>
                              <th>Question Type</th>
                              <th>Answer Type</th>
                              <th>Marks of Question</th>
                              <th colSpan="2">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                            items != null ? items.map(contents => (
                                  <tr key={contents._id}>
                                    <td>
                                    {contents.grade}
                                  </td>
                                  <td>
                                      {contents.coursetype}
                                  </td>
                                  <td>
                                      {contents.questiontype}
                                  </td>
                                  <td>
                                      {contents.answertype}
                                  </td>
                                  <td>
                                      {contents.totalmarks}
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" style={{width:"70px"}} onClick={() => handleOnClickEdit(contents)}>Edit</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" onClick={() => handleOnClickDelete(contents)}>Delete</button>
                                  </td>
                                  </tr>
                              )) : 
                              <tr>
                                  <td></td>
                              </tr>
                            }
                          </tbody>
        </table>
       
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

export default Grade8ContentTestForTeacher