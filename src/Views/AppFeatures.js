import React from 'react'

function AppFeatures() {
    return (
        <div>
          
      {/* ======= App Features Section ======= */}
      <section id="features" className="features mt-5">
        <div className="container">
          <div className="section-title">
            <h2>App Features</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row no-gutters">
            <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="bx bx-receipt" />
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                    <i className="bx bx-cube-alt" />
                    <h4>Ullamco laboris nisi</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bx bx-images" />
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bx bx-shield" />
                    <h4>Beatae veritatis</h4>
                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bx bx-atom" />
                    <h4>Molestiae dolor</h4>
                    <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                    <i className="bx bx-id-card" />
                    <h4>Explicabo consectetur</h4>
                    <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
              <img src={`${process.env.PUBLIC_URL}/img/features.svg`} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>{/* End App Features Section */}  
        </div>
    )
}

export default AppFeatures
