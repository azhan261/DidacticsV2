import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswers } from '../../Apis/apiForAnswers'
import axios from 'axios';

function ResultsForStudent(props) {
    const location = useLocation();
    const [answers, setAnswers] = useState([])
    const [items, setItems] = useState([])
    var serialNumber = 0
    useEffect(() => {
     /*
      const fetchItems = async function() {
        const contents = await getAnswers()
        console.log(contents)
        //setItems(contents)

      }
      fetchItems()
   */
      const fetchAnswers = () => {
        var dataToFetch = location.state
        /*
        axios.post('https://didactics.one/answers/email', dataToFetch)
        .then((res) => {
          const answerData = res.data;
          setItems(answerData)
        });
        */
      
       console.log(dataToFetch)
       return fetch("https://didactics.one/answers/email", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dataToFetch)
        })
        .then(res => res.json())        
      }
      const answerFetching = async function(){
        const answerContent = await fetchAnswers()
        console.log(answerContent)
        setAnswers(answerContent)
      }
      answerFetching()
     
    }, []);

    
    const history = useHistory()
    const handleOnClick = (data) => {
      console.log(data)
        if (data.answertype == "Multiple Choice"){
          history.push({
            pathname:"/view-current-answer-mcq",
            state: data
          })
        } else if (data.answertype == "Fill in the Blanks"){
          history.push({
            pathname:"/view-current-answer-blanks",
            state: data
          })
       } else if (data.answertype == "Text"){
          history.push({
            pathname:"/view-current-answer",
            state: data
          })
       }
       else if (data.answertype == "Pronunciation"){
        history.push({
          pathname:"/view-current-answer-pronunciation",
          state: data
        })
     }
    }

    const handlingSerialNumber = () => {
    serialNumber = serialNumber + 1
    return(
        <td>{serialNumber}</td>
    )
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Results</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
        <h6 className="m-0 font-weight-bold">List of Answers to Questions</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Question Title</th>
                              <th>Total Marks</th>
                              <th>Obtained Marks</th>
                              <th>Email</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                      
                              {
                              answers.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}  
                                  <td>
                                      {contents.questionTitle}
                                  </td>
                                  <td>
                                      {contents.totalMarks}
                                  </td>
                                  <td>
                                      {contents.marksObtained}
                                  </td>
                                  <td>
                                      {contents.email}
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Answer</button>
                                  </td>
                                  </tr>
                              ))
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

export default ResultsForStudent
