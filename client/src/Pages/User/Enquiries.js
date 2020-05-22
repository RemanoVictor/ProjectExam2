import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Nav from "../../Components/nav2";
import { NEWENQUIRY } from "../../Constants/constant";

export default function VenueEnquiry() {
  const { register, handleSubmit, errors } = useForm();

  const submitEnq = (enqData) => {
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
    <>
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(submitEnq)}>
        <label htmlFor="establishment">Establishment</label>
        <input
          type="text"
          placeholder="establishment"
          name="establishment"
          id="establishment"
          ref={register({ required: true, maxLength: 40 })}
        />
        {errors.establishment && <p>establishment name is required</p>}

        <label htmlFor="clientName"> Name </label>
        <input
          type="text"
          placeholder="clientName"
          name="clientName"
          id="clientName"
          ref={register({ required: true })}
        />
        {errors.clientName && <p>Name is required</p>}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.emaile && <p>Email is required</p>}

        <label htmlFor="checkin">Check-in</label>
        <input
          type="date"
          name="checkin"
          id="checkin"
          ref={register({ required: true })}
        />

        <label htmlFor="checkout">Check-out</label>
        <input
          type="date"
          name="checkout"
          id="checkout"
          ref={register({ required: true })}
        />

        <label htmlFor="adults"> Adults </label>
        <input
          type="number"
          name="adults"
          id="adults"
          ref={register({ required: true })}
        />

        <input type="submit" />
      </form>
    </>
  );
}
