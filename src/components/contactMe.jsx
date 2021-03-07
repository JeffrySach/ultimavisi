import React from "react";

import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dotenv from "dotenv"

dotenv.config();

export default function ContactUs() {

const schema = yup.object().shape({
    firstName: yup.string().required("First Name should be required please"),
    subject: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.number().required(),
  });




function Form() {
          const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(schema),
          })
          const submitForm = (data) => {
            console.log(data);               
            }
            
      function sendEmail(e) {
              e.preventDefault();
              

              emailjs.sendForm("service_zi6pbxp", "ultimavisi" , e.target, "user_fhn8g8YAG2PQE9DaaDKH4")
              .then((result) => {
                console.log(result.text);
                return alert("a")
               } , (error) => {
               console.log('FAILED...',error.text);
               });
               e.target.reset()
      
            }
           
          return (

  <form onSubmit={handleSubmit(submitForm)&&sendEmail} name="sentMessage" id="contactForm"  >
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="firstName"
            className="form-control"
            placeholder="Name"
            required="required"
            ref={register}
          />
          <p> {errors.firstName?.message} </p>
          <p className="help-block text-danger"></p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            required="required"
            ref={register}
          />
          <p className="help-block text-danger"></p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="text"
            id="message"
            className="form-control"
            placeholder="Subject"
            name="subject"
            required="required"
            ref={register}
          />
          <p className="help-block text-danger"></p>
        </div>
      </div>
    </div>
    
    <div className="form-group">
      <textarea
        name="message"
        id="message"
        className="form-control"
        rows="4"
        placeholder="Message"
        required
        ref={register}
      ></textarea>
      <p className="help-block text-danger"></p>
    </div>
    <div id="success"></div>
    <button type="submit" className="btn btn-custom btn-lg" value="Send Message" >
      Send Message
    </button>
    
  </form>
  )
  
        }
      return Form()
      }