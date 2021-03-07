import React, { Component } from "react";

export class Header extends Component {
  getStyles = () => {
    const GREY = "#00000";

    return {
      header: {
        // styles go here!
      },
      well: {
        boxShadow: `3px 3px 1px ${GREY}`,
        width: `92%`,
        lineHeight: `1.5`
      },
    };
  };
  
  render() {
    const styles = this.getStyles();

    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p style={styles.well} >
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
