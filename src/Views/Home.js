import React from 'react'




function Home() {
    return (
        <div>   
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                    <div>
                        <h1>App landing page template Testing Git hub </h1>
                        <h2>Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait</h2>
                        <a href="#" className="download-btn"><i className="bx bxl-play-store" /> Google Play</a>
                        <a href="#" className="download-btn"><i className="bx bxl-apple" /> App Store</a>
                    </div>
                    </div>
                    <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
                    <img src={`${process.env.PUBLIC_URL}/img/hero-img.png`} className="img-fluid" alt="" />
                    </div>
                </div>
                </div>
            </section>{/* End Hero */}
        </div>
    )
}

export default Home
