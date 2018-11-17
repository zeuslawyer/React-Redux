import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  let date = new Date().toDateString();
  let time = new Date().toTimeString().slice(0, 9);

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="zubin"
          date={date}
          time={time}
          imageURL={faker.image.avatar()}
          content=" Nice Work, Zub!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="rowena"
          date={date}
          time={time}
          imageURL={faker.image.avatar()}
          content=" Sweet, you're learning fast, dude!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="stuart"
          date={date}
          time={time}
          imageURL={faker.image.avatar()}
          content="This doesn't look that hard - but that means it probably ain't easy!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
