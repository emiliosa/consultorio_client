import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";

const Navbar = ({ sticky }) => {
return (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="container-fluid">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <div class="row tm-brand-row">
        <div class="col-lg-4 col-10">
          <div class="tm-brand-container">
            <div class="tm-brand-texts">
              <h1 class="text-uppercase tm-brand-name">Diagnostico Belgrano </h1>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-2 tm-nav-col">
          <div class="tm-nav">
            <nav class="navbar navbar-expand-lg navbar-light tm-navbar">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto mr-0">
                    <li class="nav-item">
                        <div class="tm-nav-link-highlight"></div>
                        <a class="nav-link" href="#">
                        <i class="fa fa-home"></i><span class="sr-only">(current)</span></a                    >
                  </li>
                    <li class="nav-item">
                        <div class="tm-nav-link-highlight"></div>
                        <a class="nav-link" href="#">Galería</a>
                    </li>
                    <li class="nav-item">
                        <div class="tm-nav-link-highlight"></div>
                        <a class="nav-link" href="contact.html">Contacto</a>
                    </li>
				  <li class="nav-item dropdown">					
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i>
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="index-paciente.html">Pacientes</a>
					    <div class="dropdown-divider"></div>
					    <a class="dropdown-item" href="index-profesional.html">Profesionales</a>										
					</div>
				  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </nav>
)};
export default Navbar;

