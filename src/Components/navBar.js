import React from 'react'
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar = (props) => {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top bg-${props.mode}`} data-bs-theme={props.mode} style={{backgroundColor:"gray"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> <strong>KhabarNow</strong></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            </ul>

            {/* THEME TOGGLE WITH ICON */}
            <div 
              className="ms-3 d-flex align-items-center"
              style={{ cursor: "pointer" }} 
              onClick={props.toggleMode}
            >
              {props.mode === "light" ? (
                <FaMoon size={20} color="#333" />
              ) : (
                <FaSun size={20} color="#f1c40f" />
              )}

              <span className={`ms-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                {props.mode === "light" ? "Dark Mode" : "Light Mode"}
              </span>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
