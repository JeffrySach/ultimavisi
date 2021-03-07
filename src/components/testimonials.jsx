import React, { Component } from "react";
import Item from "./item";
import Carousel from "react-elastic-carousel";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export class testimonials extends Component {

  
  
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Clients</h2>
          </div>
          <div className="row align-items-start">
          {/* {this.props.data ? this.props.data.address : "loading"} */}
          <Carousel breakPoints={breakPoints} >
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[0].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[1].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[2].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[3].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[4].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[5].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[6].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[7].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[8].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[9].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[10].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[11].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[12].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[13].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[14].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[15].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[16].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[17].img : "loading"} alt="" /></Item>
          <Item className="testimonial-image">  <img src={this.props.data ? this.props.data[18].img : "loading"} alt="" /></Item>
            </Carousel>
         
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
