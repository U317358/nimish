

const Home = () => {
  return (
    <>
      {/* ===== Residential Section ===== */}
      <div className="container-fluid mt-4">
        <div className="row align-items-center">

          {/* LEFT - 60% (Images) */}
          <div className="col-md-7">
            <div id="resCarousel" className="carousel slide" data-bs-ride="carousel">

              {/* Indicators */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#resCarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#resCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#resCarousel" data-bs-slide-to="2"></button>
              </div>

              {/* Slides */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/house1.jpg" className="d-block w-100" alt="house1" />
                </div>

                <div className="carousel-item">
                  <img src="/house3.jpg" className="d-block w-100" alt="house2" />
                </div>

                <div className="carousel-item">
                  <img src="/house2.webp" className="d-block w-100" alt="house3" />
                </div>
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#resCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#resCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>

          {/* RIGHT - 40% (Text) */}
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div className="p-4 text-center" style={{ borderLeft: "3px solid #000" }}>
              
              <h5 className="mb-3">Residential Design</h5>

              <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
                A modern living space crafted with simplicity and elegance.<br />
                Designed to maximize natural light and airflow.<br />
                Clean forms, functional planning, and subtle aesthetics.<br />
                Where comfort meets contemporary lifestyle.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* ===== Commercial Section ===== */}
      <div className="container-fluid mt-5">
        <div className="row align-items-center">

          {/* LEFT - 40% (Text) */}
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div className="p-4 text-center" style={{ borderRight: "3px solid #000" }}>
              
              <h5 className="mb-3">Commercial Design</h5>

              <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
                Smart spaces designed for productivity and brand identity.<br />
                Efficient layouts enhancing workflow and user experience.<br />
                Modern materials with a professional visual appeal.<br />
                Where business meets innovative architectural thinking.
              </p>

            </div>
          </div>

          {/* RIGHT - 60% (Images) */}
          <div className="col-md-7">
            <div id="comCarousel" className="carousel slide" data-bs-ride="carousel">

              {/* Indicators */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#comCarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#comCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#comCarousel" data-bs-slide-to="2"></button>
              </div>

              {/* Slides */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/commercial 1.webp" className="d-block w-100" alt="img1" />
                </div>

                <div className="carousel-item">
                  <img src="/commercial 2.webp" className="d-block w-100" alt="img2" />
                </div>

                <div className="carousel-item">
                  <img src="/commercial 3.jpg" className="d-block w-100" alt="img3" />
                </div>
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#comCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#comCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;