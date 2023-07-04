import React from "react";
import { Link } from "react-router-dom";
import transitions from "bootstrap";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <button
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="#navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
              >
                <li onClick={() => setActive("home")}>
                  <Link
                    to="/"
                    className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li onClick={() => setActive("create")}>
                  <Link
                    to="/create"
                    className={`nav-item nav-link ${
                      active === "create" ? "active" : ""
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    Create
                  </Link>
                </li>
                <li onClick={() => setActive("about")}>
                  <Link
                    to="/about"
                    className={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </Link>
                </li>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <li className="d-flex">
                        <div className="profile-logo">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="profile pic"
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              marginTop: "12px",
                            }}
                          />
                        </div>
                        <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                          {user?.displayName}
                        </p>
                      </li>
                      <li
                        className="nav-item nav-link text-center"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </>
                  ) : (
                    <li onClick={() => setActive("login")}>
                      <Link
                        to="/auth"
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        }`}
                        style={{ textDecoration: "none" }}
                      >
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
