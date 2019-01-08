import { useState, useEffect } from "react";

function getLocation() {
  // set up use State
  const [latitude, setLatitude] = useState(null);
  const [errMessage, setErrMessage] = useState("");

  //set up use Effect for a one time action to get user loc
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
      },
      err => setErrMessage(err.message)
    );
  }, []);

  return [latitude, errMessage];
}

export default getLocation;
