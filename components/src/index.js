import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div>
      "Hi There, Zubin!"
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
