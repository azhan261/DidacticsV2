import React, { useState, useEffect, useRef }  from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

function CurrentBlogViewForTeacher() {
    useEffect(() => {
        console.log(location.state)
    }, [])
    const location = useLocation();
    return (
        <div>
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Blogs</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
        <h6 className="m-0 font-weight-bold">{location.state.blogstitle}</h6>
      </div>
      <div className="card-body">
        <div>
        {location.state.blogscontent}
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
    )
}

export default CurrentBlogViewForTeacher
