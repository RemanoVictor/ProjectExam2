import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import axios from "axios";

import Nav from "../../Components/nav2";
import { NEWENQUIRY } from "../../Constants/constant";

export default function VenueEnquiry() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const { register, handleSubmit, errors } = useForm();

  const submitEnq = (enqData) => {
    handleOpenModal();
    console.log(enqData);
    const form = new FormData();
    form.append("establishment", enqData.establishment);
    form.append("clientName", enqData.clientName);
    form.append("email", enqData.email);
    form.append("message", enqData.message);
    form.append("checkin", enqData.checkin);
    form.append("checkout", enqData.checkout);
    form.append("adults", enqData.adults);
    axios.post(NEWENQUIRY, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className=" container-fluid ">
      <div className=" row navigation ">
        <div className=" col-sm-12 ">
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
            <h3>
              Thank you for your enquiry! We will process your request shortly
            </h3>
          </div>
          <button onClick={handleCloseModal}>x</button>
        </Modal>
      </div>

      <div className="row enquiryContainer">
        <div className="col-md-4 col-md-offset-4Form">
          <form onSubmit={handleSubmit(submitEnq)}>
            <h2> Enquiry Form </h2>
            <br></br>
            <label htmlFor="establishment">Establishment</label>
            <input
              type="text"
              placeholder="establishment"
              name="establishment"
              className="form-control"
              id="establishment"
              ref={register({ required: true, maxLength: 40 })}
            />
            {errors.establishment && <p>establishment name is required</p>}

            <label htmlFor="clientName"> Name </label>
            <input
              type="text"
              placeholder="clientName"
              name="clientName"
              className="form-control"
              id="clientName"
              ref={register({ required: true })}
            />
            {errors.clientName && <p>Name is required</p>}

            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="form-control"
              id="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.emaile && <p>Email is required</p>}

            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="checkin">Check-in</label>
                <input
                  type="date"
                  name="checkin"
                  className="form-control"
                  id="checkin"
                  ref={register({ required: true })}
                />
              </div>

              <div className="col-sm-6">
                <label htmlFor="checkout">Check-out</label>
                <input
                  type="date"
                  name="checkout"
                  className="form-control"
                  id="checkout"
                  ref={register({ required: true })}
                />
              </div>
            </div>

            <label htmlFor="adults"> Adults </label>
            <input
              type="number"
              name="adults"
              className="form-control"
              id="adults"
              ref={register({ required: true })}
            />

            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}
