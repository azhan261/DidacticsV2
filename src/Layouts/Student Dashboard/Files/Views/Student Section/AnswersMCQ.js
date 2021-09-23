import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswers } from '../../Apis/apiForAnswers';

function AnswersMCQForStudent() {
       
    const [items, setItems] = useState([])
    const location = useLocation();

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAnswers()
        setItems(contents)
        console.log(location.state.optionsQuestionMcq[0])
      }
      fetchItems()
    }, []);

    const history = useHistory()
    return (
        <>
        <div className="container-fluid">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>{location.state.questionTitle}</CardHeader>
                <CardBody>
                    <div>
                        {location.state.questionContent}
                    </div>
                    <div>{location.state.optionsQuestionMcq[0].options}</div>
                    <div>{location.state.optionsQuestionMcq[1].options}</div>
                    <div>{location.state.optionsQuestionMcq[2].options}</div>
                    <div>{location.state.optionsQuestionMcq[3].options}</div>
                </CardBody>
              </Card>
              <Card className="card-plain">
                <CardHeader>Your Answer</CardHeader>
                <CardBody>
                    <div>
                        {location.state.answerContent}
                    </div>
                </CardBody>
              </Card>
              <Link className="btn btn-dark" to="/answer-list">
              Back to List of Answers
              </Link>
            </Col>
          </Row>
        </div>
      </>
    )
}

export default AnswersMCQForStudent
