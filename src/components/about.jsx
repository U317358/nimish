

       const About = () => {
  return (
    <div className="container mt-5">

      <div className="row g-4">

        {/* 🏢 COMMERCIAL */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 border-0 rounded-4 p-4">

            <h4 className="text-center text-primary mb-3">
              🏢 Commercial Design
            </h4>

            <p>
              📍 <strong>Location:</strong> Kolhapur, Maharashtra <br /><br />

              💡 <strong>Concept:</strong><br />
              Modern, simple space focusing on light, ventilation, and usability <br /><br />

              🏗️ <strong>Planning:</strong><br />
              Ground: Workspaces, reception <br />
              Upper: Cabins + meeting areas <br /><br />

              🌿 <strong>Design Features:</strong><br />
              Open layout <br />
              Cross ventilation <br />
              Minimal elevation (white + wood tones) <br /><br />

              🧱 <strong>Materials:</strong><br />
              RCC, brick walls, glass, wooden finishes <br /><br />

              🎯 <strong>Conclusion:</strong><br />
              A modern commercial space with efficient planning and clean aesthetics.
            </p>

          </div>
        </div>

        {/* 🏠 RESIDENTIAL */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 border-0 rounded-4 p-4">

            <h4 className="text-center text-success mb-3">
              🏠 Residential Design
            </h4>

            <p>
              📍 <strong>Location:</strong> Goa, India <br /><br />

              💡 <strong>Concept:</strong><br />
              Tropical modern home designed for relaxation and airflow <br /><br />

              🏗️ <strong>Planning:</strong><br />
              Ground: Living, kitchen, guest room, sit-out <br />
              First: Bedrooms with balcony views <br /><br />

              🌿 <strong>Design Features:</strong><br />
              Open layout <br />
              Large windows <br />
              Sloped roof & earthy tones <br /><br />

              🧱 <strong>Materials:</strong><br />
              RCC, laterite stone, glass, wooden finishes <br /><br />

              🎯 <strong>Conclusion:</strong><br />
              A peaceful modern home blending comfort with nature.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};

export default About;