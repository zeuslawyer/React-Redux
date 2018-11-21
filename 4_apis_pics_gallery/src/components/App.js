import React from "react";
import SearchBar from "./SearchBar";

const componentStyle = {marginTop:"10px"}

function App() {
  return (
    <div className="ui container" style={componentStyle}>
      <SearchBar />
    </div>
  );
}

export default App;
