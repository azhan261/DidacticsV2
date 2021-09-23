import React from 'react'

function Gallery() {
    return (
        <div>
      {/* ======= Gallery Section ======= */}
      <section id="gallery" className="gallery mt-5">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>
        <div className="container-fluid" data-aos="fade-up">
          <div className="gallery-slider swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-1.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-1.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-2.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-2.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-3.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-3.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-4.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-4.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-5.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-5.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-6.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-6.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-7.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-7.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-8.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-8.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-9.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-9.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-10.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-10.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-11.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-11.png`} className="img-fluid" alt="" /></a></div>
              <div className="swiper-slide"><a href={`${process.env.PUBLIC_URL}/img/gallery/gallery-12.png`} className="gallery-lightbox" data-gall="gallery-carousel"><img src={`${process.env.PUBLIC_URL}/img/gallery/gallery-12.png`} className="img-fluid" alt="" /></a></div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>{/* End Gallery Section */}
        </div>
    )
}

export default Gallery
