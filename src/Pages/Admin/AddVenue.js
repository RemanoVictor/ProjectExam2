import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import axios from "axios";

import Nav from "../../Components/nav";
import { NEWESTABLISHMENT } from "../../Constants/constant";

export default function AddVenue() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const { register, handleSubmit, errors } = useForm();

  const submitData = (estData) => {
    handleOpenModal();
    const form = new FormData();
    console.log(estData);
    form.append("establishmentName", estData.establishmentName);
    form.append("establishmentEmail", estData.establishmentEmail);
    form.append("imageUrl", estData.imageUrl);
    form.append("price", estData.price);
    form.append("maxGuests", estData.maxGuests);
    form.append("googleLat", estData.googleLat);
    form.append("googleLong", estData.googleLong);
    form.append("description", estData.description);
    form.append("self-catering", estData.selfCatering);
    form.append("true", estData.selfCatering);
    form.append("false", estData.selfCatering);
    form.append("id", estData.id);
    axios.post(NEWESTABLISHMENT, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className="[ container-fluid ]">
      <div className="[ row ] [ navigation ]">
        <div className="[ col-md-12 ]">
          <Nav />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Modal
            isOpen={showModal}
            contentLabel="Minimal Modal Example"
            className="Modal"
            overlayClassName="Overlay1"
            onRequestClose={handleCloseModal}
          >
            <div>
              <h3> Your venue has been successfully added!</h3>
            </div>
            <button onClick={handleCloseModal}>x</button>
          </Modal>
        </div>
      </div>

      <div className="row Form addvenuecontanier">
        <div className=" col-md-4 col-md-offset-4 Form">
          <h2> Add Venue </h2>
          <br></br>
          <form onSubmit={handleSubmit(submitData)}>
            <label htmlFor="establishmentName"> Establishment Name </label>
            <input
              type="text"
              placeholder="Establishment Name"
              id="establishmentName"
              name="establishmentName"
              className="form-control"
              ref={register({ required: true, maxLength: 40 })}
            />
            {errors.establishmentName && (
              <p>Please enter a valid establishment name. </p>
            )}

            <label htmlFor="establishmentEmail">Establishment Email</label>
            <input
              type="text"
              placeholder="Establishment Email"
              name="establishmentEmail"
              className="form-control"
              id="establishmentEmail"
              ref={register({ required: true, pattern: /^\S+@\S+$/ })}
            />
            {errors.email && <p>Please enter a valid email.</p>}

            <label htmlFor="imageUrl">Image Url</label>
            <input
              type="text"
              placeholder="imageUrl"
              name="imageUrl"
              className="form-control"
              id="imageUrl"
              ref={register({})}
            />

            <label htmlFor="price">Price Per Person</label>
            <input
              type="number"
              name="price"
              className="form-control"
              id="price"
              ref={register({ requred: true, maxLength: 3 })}
            />
            {errors.price && <p>Please enter a valid price</p>}

            <label htmlFor="maxGuests">Max guests</label>
            <input
              type="number"
              name="maxGuests"
              className="form-control"
              id="maxGuests"
              ref={register({ required: true })}
            />
            {errors.maxGuests && <p> Please enter a valid number of guests</p>}

            <label htmlFor="googleLat">latitude</label>
            <input
              type="text"
              name="googleLat"
              className="form-control"
              id="googleLat"
            />

            <label htmlFor="googleLong">Longitude</label>
            <input
              type="text"
              name="googleLong"
              className="form-control"
              id="googleLong"
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              id="description"
              ref={register({ required: true })}
            />
            {errors.description && <p> Please enter a description </p>}

            <label htmlFor="selfCatering">Self-catering</label>
            <br></br>
            <label htmlFor="true">True</label>
            <input
              type="radio"
              id="true"
              name="selfCatering"
              value="true"
              ref={register({ required: true })}
            />
            <label htmlFor="false">False</label>
            <input
              type="radio"
              id="false"
              name="selfCatering"
              value="false"
              ref={register({ required: true })}
            />
            <br></br>

            <label htmlFor="id">ID</label>
            <input
              type="number"
              name="id"
              className="form-control"
              id="id"
              ref={register({ required: true })}
            />
            {errors.id && <p> Please enter an ID </p>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
