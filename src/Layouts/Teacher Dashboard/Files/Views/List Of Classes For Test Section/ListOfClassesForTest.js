import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";
import "../../../SubjectCard.scss"

function ListOfClassesForTestForTeacher() {
  const onGradeClick = (e) => {
    /*
    e.preventDefault()
    history.push = ("/")
    */
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
  <h1 className="h3BlackDashboard mb-2 text-gray-800">List of Grades for Test Content</h1>
  
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
      <h6 className="m-0 font-weight-bold">Select A Grade</h6>
    </div>
    <div className="card-body">
    <Row className="mt-3">
          <Col md="4">
          <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 1
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 2
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 3
                                  </button>
                                </div>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 4
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 5
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 6
                                  </button>
                                </div>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 7
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 8
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 9
                                  </button>
                                </div>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 10
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 11
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                  <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} >
                                    Grade 12
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

export default ListOfClassesForTestForTeacher
