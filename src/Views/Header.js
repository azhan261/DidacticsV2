import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>       
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><a href="index.html">Logistics</a></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Link className="nav-link scrollto active" to = "/home">Home</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/app-features">App Features</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/details">Details</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/gallery">Gallery</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/testimonial">Testimonials</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/pricing">Pricing</Link></li>
                    <li><Link className="nav-link scrollto" to = "/main/faq">F.A.Q</Link></li>
                    <li class="dropdown"><a href="#"><span>Login</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                    <li className="nav-item">
                    <Link className="nav-link" to="/main/login-auth-student" >Login For Students</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/main/login-auth-teacher" >Login For Teachers</Link>
                    </li>
                    </ul>
                    </li>
                    <li class="dropdown"><a href="#"><span>Registration Forms</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                    <li className="nav-item">
                    <Link className="nav-link scrollto" to = "/main/registration">Admission Form</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link scrollto" to = "/main/teacher-registration">Teacher Registration Form</Link>
                    </li>
                    </ul>
                    </li>
                    <li>{/* Navbar link*/}<Link className="nav-link scrollto" to="/main/contact" >Contact Us</Link></li>
                    
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}
        </div>
    )
}

export default Header
