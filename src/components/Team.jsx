import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Portofolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href={d.img}
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src={d.img1}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                    
                    <div className="thumbnail">
                      {" "}
                      
                      {/* <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div> */}
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
