import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-expand navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
             <img
                        src="img/Logo.png"
                        className="img-responsive"
                        alt="Project Title"
                        style={{width : '125px'}}
                        />
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              {/* <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery 
                </a>
              </li> */}
              <li>
                <a href="#testimonials" className="page-scroll">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
