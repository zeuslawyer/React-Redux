import React from "react";

const SeasonDisplay = props => {
  let season = getSeason(props.latitude);

  if (!season) {
    return (
      <div>
        Season Display Widget. <br />
        The Latitude is: {props.latitude}, and we have not been able to
        calculate the season for some reason.
      </div>
    );
  }

  let displayText =
    season.toLowerCase() === "winter"
      ? "Rug up mate, it's chilly as!"
      : "It's Summertime! Let's head to the beach, baby!";

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
};

export default SeasonDisplay;

const getSeason = latitude => {
  let month = new Date().getMonth();

  if (6 <= month <= 11) {
    return latitude > 0 ? "Winter" : "Summer";
  } else {
    return latitude > 0 ? "Winter" : "Summer";
  }
};
