import React from "react";
import './SeasonDisplay.css'
import UserForm from "./UserForm";

const seasonConfig ={
  summer: {
    text: "Let hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake"
  }
}
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "winter" : "summer ";
  } else {
    return lat > 0 ? "summer" : "winter ";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const text = season === "summer" ? "Blurr, it is chilly" : "Let hit the beach";
  // const iconName = season === "summer" ? "snowflake" : "sun"
  const {text, iconName} = seasonConfig[season];

  return (
    <>
      {/* <div style={{ color: "green", textAlign: "center", margin: "10px" }}>
        {props.lat}
      </div> */}
      <div className={`season-display ${season}`}>
        <i className= {`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <UserForm/>
        <i className= {`icon-right massive ${iconName} icon`}></i>
      </div>
    </>
  );
};

export default SeasonDisplay;
