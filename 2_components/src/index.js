import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";
import faker from "faker";

const App = () => {
  let date = new Date().toDateString();
  let time = new Date().toTimeString().slice(0, 9);

  return (
    <div>
      {/* "Hi There, Zubin!" */}
      <CommentDetail
        author="zubin"
        date={date}
        time={time}
        imageURL={faker.image.avatar()}
        content =" Nice Work, Zub!"
      />
      <CommentDetail
        author="rowena"
        date={date}
        time={time}
        imageURL={faker.image.avatar()}
        content =" Sweet, you're learning fast, dude!"
      />
      <CommentDetail
        author="stuart"
        date={date}
        time={time}
        imageURL={faker.image.avatar()}
        content ="This doesn't look that hard - but that means it probably ain't easy!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
