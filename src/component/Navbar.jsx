import React from "react";
import logo from "../img/plane.png";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nav-colour">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            <div>
              <img src={logo} alt="avr img" height={60} width={70} />
            </div>
            <div>
              AVR AIRPORT <br />
              Companion
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/Servicepage"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/Contactpage"
                >
                  Contactus
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/FAQpage">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/Aboutpage"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
    </div>
  );
};

export default Navbar;
