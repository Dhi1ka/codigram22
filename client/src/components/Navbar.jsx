import React from "react";
import { Link } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";
import { BiUser, BiLogIn } from "react-icons/bi";
import { FcSearch, FcHome } from "react-icons/fc";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Codigram22
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary" type="submit">
            <FcSearch />
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="me-auto"></div>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <FcHome fontSize={30} />
              </Link>
            </li>
            {user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/posts/create">
                  <BsPlusSquare fontSize={30} />
                </Link>
              </li>
            ) : null}
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BiUser fontSize={30} />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/account">
                      Account
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="login" className="nav-link">
                    <BiLogIn fontSize={30} />
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
