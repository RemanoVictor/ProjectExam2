import React, { useState, useEffect } from "react";

import axios from "axios";

import { CONTACTS } from "../../Constants/constant";
import Messages from "../../Components/messages";
import Nav from "../../Components/nav";

export default function ContactMessages() {
  const [messageData, setmessageData] = useState(undefined);
  useEffect(() => {
    axios.get(CONTACTS).then((messageJSON) => {
      console.log(messageJSON);
      setmessageData(messageJSON.data);
    });
  }, []);
  return (
    <>
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>
      </div>
      <div className="container">
        {messageData !== undefined ? (
          messageData.map((value, index) => {
            return (
              <Messages
                key={index}
                img={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_tXpPKVwoWQynT736mi5UMQf8cTJeqbrBTjnIc35fU103_bQ&usqp=CAU"
                }
                clientName={value.clientName}
                email={value.email}
                message={value.message}
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
      </div>
    </>
  );
}
