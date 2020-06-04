import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../../Components/nav2";

import { ESTABLISHMENTS } from "../../Constants/constant";
import Cards from "../../Components/cards";

export default function AllVenues() {
  const [estData, setestData] = useState(undefined);

  useEffect(() => {
    axios.get(ESTABLISHMENTS).then((estJSON) => {
      console.log(estJSON.data);
      setestData(estJSON.data);
    });
  }, []);

  return (
    <>
      <div className=" row navigation ">
        <div className=" col-sm-12 ">
          <Nav />
        </div>
      </div>

      <div className="container-fluid venuebanner">
        <div className="row venuebanner--container">
          <img
            src="https://lh3.googleusercontent.com/proxy/UKoyDMKqwyhfUlq9_Soq2Sq558m54IPE5YnUUgBIyPU-jT6THds2ClHuObZtqAr1wfVCsOPtz9rBaecyQCkUyS9eboI0Mi1kiAAG_cA4tAVskeg_CdltPCtG8Q"
            alt="city image"
            className="venuebanner--container__image"
          />
          <h3 className="venuebanner--container__text">
            Your Accommodation awaits..
          </h3>
          <div className="venuebanner--container__overlay"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {estData !== undefined ? (
            estData.map((value, index) => {
              return (
                <Cards
                  key={index}
                  id={value.id}
                  name={value.establishmentName}
                  email={value.establishmentEmail}
                  img={value.imageUrl}
                  price={value.price}
                  max={value.maxGuests}
                  selfcatering={value.selfCatering}
                />
              );
            })
          ) : (
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <img
                  src="https://ec.europa.eu/eurostat/cache/infographs/airports/pictures/plane-loading.gif"
                  alt="loading"
                  width="50%"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
