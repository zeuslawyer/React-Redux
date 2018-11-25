import React from "react";
import ReactLoading from "react-loading";


const Loader = ({ type, color, message }) => (
  <div className="ui active dimmer ">
    <div className="ui text loader"> {message} </div>
    <ReactLoading type={type} color={color} height={"5%"} width={"20%"} />
    {/* <i className="asterisk loading icon massive" /> */}
  </div>
);
 
Loader.defaultProps ={
  message: "Loading..."
}

export default Loader;
