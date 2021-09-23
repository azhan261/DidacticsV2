import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink, BrowserRouter as Router, Switch, Route, useParams, useHistory, Link } from 'react-router-dom';
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import "./black-dashboard-theme.css"

const SidebarForTeacher = () => {
  let { id } = useParams();
    return (
      <div>
        <div className="sidebar" >
          <div className="sidebar-wrapper">
            <Nav>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-2"
                      activeClassName="active"
                      to={`/teacher/dashboard/${id}`}

                    >
                      <i className = "tim-icons icon-badge" />
                      <p>Dashboard</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-2"
                      activeClassName="active"
                      to={`/teacher/course-planning-content/${id}`}
                    >
                      <i className = "tim-icons icon-single-copy-04" />
                      <p>Create Subject Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-2"
                      activeClassName="active"
                      to={`/teacher/list-of-classes/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>View Subject's Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-2"
                      activeClassName="active"
                      to={`/teacher/course-planning-content-test/${id}`}
                    >
                      <i className = "tim-icons icon-bell-55" />
                      <p>Create Test's Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-2"
                      activeClassName="active"
                      to={`/teacher/list-of-classes-test/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>View Test's Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-2"
                      activeClassName="active"
                      to={`/teacher/results-category/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>View Results</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-2"
                      activeClassName="active"
                      to={`/teacher/notification-list/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Notification</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link"
                      activeClassName="active"
                      to={`/teacher/blog-list/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Blogs</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link"
                      activeClassName="active"
                      to={`/teacher/facerecognition/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Live Class</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link"
                      activeClassName="active"
                      to={`/teacher/flip-book/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Book</p>
                    </NavLink>
                   
            </Nav>
            
          </div>
        </div>
     

      </div>
    );
  };
  

export default SidebarForTeacher;

