import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import axios from "axios";

import Nav from "../../Components/nav2";
import { NEWCONTACT } from "../../Constants/constant";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const { register, handleSubmit, errors } = useForm();

  const submitData = (data) => {
    handleOpenModal();
    console.log(data);
    const form = new FormData();
    form.append("clientName", data.clientName);
    form.append("email", data.email);
    form.append("message", data.message);
    axios.post(NEWCONTACT, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className=" container-fluid ">
      <div className="[ row ] [ navigation ]">
        <div className="[ col-sm-12 ]">
          <Nav />
        </div>
      </div>

      <div className="row">
        <Modal
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay1"
          onRequestClose={handleCloseModal}
        >
          <div>
            <h3>Thank you for reaching out! We will get back to you shortly</h3>
          </div>
          <button onClick={handleCloseModal}>x</button>
        </Modal>
      </div>
      <div className="bgimage2"></div>

      <div className="row contactform">
        <h2>Contact Us</h2>
        <br></br>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form onSubmit={handleSubmit(submitData)}>
            <label htmlFor="clientName">Please enter your name</label>
            <input
              type="text"
              placeholder="clientName"
              className="form-control"
              name="clientName"
              id="clientName"
              ref={register({ required: true, maxLength: 40 })}
            />
            {errors.clientName && <p>Name is required</p>}

            <label htmlFor="email">Please enter your email</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="form-control"
              id="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/ })}
            />
            {errors.email && <p>Email is required</p>}

            <label htmlFor="message">Please enter a message</label>
            <input
              type="text"
              name="message"
              className="form-control"
              id="message"
              ref={register({})}
            />
            {errors.message && <p>Message is required</p>}

            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}
