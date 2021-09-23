import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink} from 'react-router-dom';
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import "./black-dashboard-theme.css"

const SidebarForStudent = (props) => {
  
    return (
      <div
      >
        <div>
        <div className="sidebar" >
          <div className="sidebar-wrapper">
            <Nav>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to="/student/dashboard"

                    >
                      <i className = "tim-icons icon-badge" />
                      <p>Dashboard</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to="/student/list-of-subjects" 
                    >
                      <i className = "tim-icons icon-single-copy-04" />
                      <p>View Subjects</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to="/student/list-of-subjects-for-test"
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>View Tests Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to="/student/answer-list"
                    >
                      <i className = "tim-icons icon-bell-55" />
                      <p>Results</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to="/student/notifications"
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Notification</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link"
                      activeClassName="active"
                      to="/student/testimonial-list"
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Testimonials</p>
                    </NavLink>
                    <a style = {{color : 'white'}}
                      className="nav-link"
                      activeClassName="active"
                      href = "https://didactics.one/"
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Live Class</p>
                    </a>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link"
                      activeClassName="active"
                      to="/student/flip-book"
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Books</p>
                    </NavLink>
                    
                    
                   
            </Nav>
            
          </div>
        </div>
     

      </div>
      </div>
    );
  };
  

export default SidebarForStudent;
