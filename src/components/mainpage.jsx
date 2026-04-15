import { Link } from "react-router-dom";


const MainPage = () => {
  return (

  <div>
      <nav
        className="navbar navbar-expand-lg px-4 position-relative"
        style={{ backgroundColor: "#01041ae7" }}
      >
        {/* Left Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/form">Contact</Link>
          </li>
        </ul>

        {/* Center Logo */}
        <h2 className="position-absolute top-50 start-50 translate-middle fw-bold text-white m-0">
          NIMISH
        </h2>
      </nav>
</div>
   
  );
};

export default MainPage; 
