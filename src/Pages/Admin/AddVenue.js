import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Nav from "../../Components/nav2";
import { NEWESTABLISHMENT } from "../../Constants/constant";

export default function AddVenue() {
  const { register, handleSubmit, errors } = useForm();

  const submitData = (data) => {
    // console.log(data);
    const form = new FormData();
    form.append("establishmentName", data.establishmentName);
    form.append("establishmentEmail", data.establishmentEmail);
    form.append("imageUrl", data.imageUrl);
    form.append("price", data.price);
    form.append("maxGuests", data.maxGuests);
    form.append("googleLat", data.googleLat);
    form.append("googleLong", data.googleLong);
    form.append("description", data.description);
    form.append("self-catering", data.selfCatering);
    form.append("true", data.selfCatering);
    form.append("false", data.selfCatering);
    form.append("id", data.id);
    axios.post(NEWESTABLISHMENT, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <>
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(submitData)}>
        <label htmlFor="establishmentName"> Establishment Name </label>
        <input
          type="text"
          placeholder="Establishment Name"
          id="establishmentName"
          name="establishmentName"
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
          id="establishmentEmail"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Please enter a valid email.</p>}

        <label htmlFor="imageUrl">Image Url</label>
        <input
          type="text"
          placeholder="imageUrl"
          name="imageUrl"
          id="imageUrl"
        />

        <label htmlFor="price">Price Per Person</label>
        <input
          type="number"
          name="price"
          id="price"
          ref={register({ requred: true, maxLength: 3 })}
        />
        {errors.price && <p>Please enter a valid price</p>}

        <label htmlFor="maxGuests">Max guests</label>
        <input
          type="number"
          name="maxGuests"
          id="maxGuests"
          ref={register({ required: true })}
        />
        {errors.maxGuests && <p> Please enter a valid number of guests</p>}

        <label htmlFor="googleLat">latitude</label>
        <input type="text" name="googleLat" id="googleLat" />

        <label htmlFor="googleLong">Longitude</label>
        <input type="text" name="googleLong" id="googleLong" />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          ref={register({ required: true })}
        />
        {errors.description && <p> Please enter a description </p>}

        <label htmlFor="selfCatering">Self-catering</label>
        <label htmlFor="true">True</label>
        <input type="radio" id="true" name="selfCatering" value="true" />
        <label htmlFor="false">False</label>
        <input type="radio" id="false" name="selfCatering" value="false" />

        <label htmlFor="id">ID</label>
        <input
          type="number"
          name="id"
          id="id"
          ref={register({ required: true })}
        />
        {errors.id && <p> Please enter an ID </p>}

        <input type="submit" />
      </form>
    </>
  );
}
