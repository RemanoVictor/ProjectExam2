import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Nav from "../../Components/nav2";
// import { NEWCONTACT } from "../../Constants/constant";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();

  const submitData = (data) => {
    console.log(data);
    const form = new FormData();
    form.append("clientName", data.clientName);
    form.append("email", data.email);
    form.append("message", data.message);
    axios.post("http://192.168.64.2/holidaze/contact-success.php", form, {
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
        <input
          type="text"
          placeholder="clientName"
          name="clientName"
          ref={register({ required: true, maxLength: 40 })}
        />
        {errors.clientName && <p>Name is required</p>}

        <input
          type="text"
          placeholder="email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>Email is required</p>}

        <textarea name="message" ref={register} />
        {errors.message && <p>Message is required</p>}

        <input type="submit" />
      </form>
    </>
  );
}
