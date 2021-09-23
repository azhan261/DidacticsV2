import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link,  } from "react-router-dom";

function ViewQueryResponseForStudent() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    return (
        <>
        <div className="content">
          <Row>
            <Col md="12">
            <Card className="card-plain">
                  <CardHeader>View Query Response</CardHeader>
                  <CardBody>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 bg-dark text-white">
                              <label >Query Title</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          {location.state.notificationTitle}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 bg-dark text-white">
                              <label >Query Content</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          {location.state.notificationContent}
                          </div>
                          <hr />
                      </div>
          
                  </CardBody>
                </Card>
              <Card className="card-plain">
                <CardBody>
                <div className = "mt-4">
                          <div class="p-3 mb-2 bg-dark text-white">
                              <label >Query's Response Title</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          {location.state.responseTitle}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 bg-dark text-white">
                              <label >Query Content</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          {location.state.responseContent}
                          </div>
                          <hr />
                      </div>
                <Link className = "btn btn-dark" to="/notification-list"> 
                Go back to Query List
                </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
      )

}

export default ViewQueryResponseForStudent
