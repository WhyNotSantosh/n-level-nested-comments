import React from "react";
import ReactDOM from "react-dom/client";
import CommentsContainer from "./src/components/CommentsContainer";
const App = () => {
  return (
    <>
      <CommentsContainer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
