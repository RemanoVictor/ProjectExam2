import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../../Components/nav2";

import { ESTABLISHMENTS } from "../../Constants/constant";
import Cards from "../../Components/cards";

export default function Holidaze() {
  const [estData, setestData] = useState(undefined);
  const [filteredResults, setFilteredResults] = useState(undefined);
  const [searchPhrase, setsearchPhrase] = useState("");
  const [isResultsFiltered, setisResultsFiltered] = useState(false);

  useEffect(() => {
    axios.get(ESTABLISHMENTS).then((estJSON) => {
      setestData(estJSON.data);
    });
  }, []);

  function handleFiltering(input) {
    let filteredest = estData.filter((value) => {
      return value.establishmentName
        .toLowerCase()
        .includes(input.target.value.toLowerCase());
    });
    setFilteredResults(filteredest);
    setisResultsFiltered(true);
    setsearchPhrase(input.target.value);
  }
  return (
    <div className="[ container-fluid ]">
      <div>
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>
      </div>
      <div className="[ container-fluid ][ landingPage ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h1 className="[ welcomeHeading ]">Holidaze </h1>
          </div>
        </div>
      </div>

      <div className="[ container ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <form>
              <p>Showing results for {searchPhrase}</p>
              <input
                type="text"
                name="username"
                onChange={handleFiltering}
                className="form-control"
              />
              <br />
              <br />
            </form>
          </div>
        </div>

        <div className="row">
          {isResultsFiltered ? (
            <div>
              {filteredResults.length > 0 ? (
                filteredResults.map((value, index) => {
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
                <div>No Results</div>
              )}
            </div>
          ) : (
            <>
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
                <div>
                  <img
                    src="https://bloxy.info/assets/progress_horizontal-e1c9f4c66e06ad7aa169dc42e420abe6f097111e9d98cf35dfc162bb41ffffe1.gif"
                    alt="loading"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
