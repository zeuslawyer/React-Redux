import "./SeasonDisplay.css";
import React from "react";

const getSeason = latitude => {
  let month = new Date().getMonth();

  if (6 <= month <= 11) {
    return latitude > 0 ? "Winter" : "Summer";
  } else {
    return latitude > 0 ? "Winter" : "Summer";
  }
};

const seasonConfig = {
  summer: {
    displayText: "It's Summertime! Let's head to the beach, baby!",
    iconName: "sun"
  },
  winter: {
    displayText: "Rug up mate, it's chilly as!",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  let season = getSeason(props.latitude).toLowerCase();

  if (!season) {
    return (
      <div>
        Season Display Widget. <br />
        The Latitude is: {props.latitude}, and we have not been able to
        calculate the season for some reason.
      </div>
    );
  }

  const { displayText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left icon ${iconName} massive `} />
      <h1 className="">{displayText}</h1>
      <i className={`icon-right icon ${iconName} massive `} />
    </div>
  );
};

export default SeasonDisplay;
