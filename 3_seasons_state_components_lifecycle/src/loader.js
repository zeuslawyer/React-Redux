import React from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <div className="ui segment align-right">
    <ReactLoading type="cylon" color="#ff0000" height={"5%"} width={"80%"} />
    {/* <i className="asterisk loading icon massive" /> */}
  </div>
);

export default Loader;
