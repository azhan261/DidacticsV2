
import React, { useState, useEffect, useRef  }  from 'react'
import { Link, useHistory, useRouteMatch,  useLocation  } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getTestPlanningsForGrade1 } from '../../../Apis/apiForTestContentPlanning';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "../../../Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/testStyle.css"


function Grade1ContentTestForStudent() {
    
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getTestPlanningsForGrade1()
      setItems(contents)
    }
    fetchItems()
  }, []);

  const location = useLocation();
  const editorRef = useRef(null);
  /*
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
*/
  const history = useHistory()
  const handleOnClick = (data) => {
    if ((data.answertype == "Text")){
      history.push({
        pathname:"/view-question-type-qa-test",
        state: data
      })
    }
    else if ((data.answertype == "HandWriting")){
      history.push({
        pathname:"/view-question-type-handwriting",
        state: data
      })
    }
    else if ((data.answertype == "Pronunciation")){
      history.push({
        pathname:"/view-question-type-pronunciation",
        state: data
      })
    }
    else if ((data.answertype == "Multiple Choice")){
      history.push({
        pathname:"/view-question-type-mcq",
        state: data
      })
    }
    else if ((data.answertype == "Fill in the Blanks")){
      history.push({
        pathname:"/view-question-type-blanks",
        state: data
      })
    }
  }


  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  
  const handleCompletion = (e) => {
/*
    if(location.state.grade == 'Grade 1'){
      history.push({
        pathname:"/Grade-1-content-test"
      })
    }
*/
  }
  return (
      <>
      <div>
        <Row>
          <Col md="12">
            <Card className="card-plain text-center">
            <CountdownCircleTimer
                  isPlaying
                  duration={3600}
                  colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                  ]}
                  onComplete={(e) => handleCompletion(e)}
                >
                   {renderTime}
                {/*{({ remainingTime }) => remainingTime}*/}
                </CountdownCircleTimer>
         
              <CardHeader>Course Test </CardHeader>
              <CardBody>
                <div className="container-fluid">
                    <div className="mt-3">
                        <h3>List of Test related Questions</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Course Name</th>
                            <th>Question's Title</th>
                            <th>Activity Type</th>
                            <th>Question Type</th>
                            <th>Answer Type</th>
                            <th>Marks of Question</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contents => (
                                <tr key={contents._id}>
                                <td>
                                    {contents.coursetype}
                                </td>
                                <td>
                                    {contents.questiontitle}
                                </td>
                                <td>
                                    {contents.activitytype}
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
                                    <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Question / Submit Answer</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
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

export default Grade1ContentTestForStudent
