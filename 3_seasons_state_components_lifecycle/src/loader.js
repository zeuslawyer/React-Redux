import React from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <div className="ui active dimmer ">
    <div className="ui text loader">Loading</div>
    <ReactLoading type="cylon" color="#ff0000" height={"5%"} width={"20%"} />
    {/* <i className="asterisk loading icon massive" /> */}
  </div>
);

export default Loader;
