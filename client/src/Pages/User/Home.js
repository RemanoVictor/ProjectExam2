import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../../Components/nav2";

import { ESTABLISHMENTS } from "../../Constants/constant";
import DropDownResults from "../../Components/dropdownresult";

export default function Holidaze() {
  const [estData, setestData] = useState(undefined);
  const [filteredResults, setFilteredResults] = useState(undefined);
  const [searchPhrase, setsearchPhrase] = useState("");
  const [isResultsFiltered, setisResultsFiltered] = useState(false);

  useEffect(() => {
    axios.get(ESTABLISHMENTS).then((estJSON) => {
      console.log(estJSON.data);
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
    <div>
      <div className="container-fluid landingPage">
        <div className="col-md-4 overlay"></div>
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>

        <div className="[ row ]">
          <div className="col-md-4 col-md-offset-4">
            <h2 className="[ welcomeHeading ]"> Search accomodation</h2>
          </div>
        </div>

        <div className="[ row ]">
          <div className="col-md-4 col-md-offset-4">
            <form>
              <input
                type="text"
                name="username"
                onChange={handleFiltering}
                className="form-control"
                autoComplete="off"
              />
              {isResultsFiltered && searchPhrase !== "" ? (
                <div className=" dropdown ">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((value, index) => {
                      return (
                        <DropDownResults
                          key={index}
                          name={value.establishmentName}
                          id={value.id}
                        />
                      );
                    })
                  ) : (
                    <div>No hotels found</div>
                  )}
                </div>
              ) : (
                ""
              )}
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
