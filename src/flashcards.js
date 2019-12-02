import React from "react";

const Flashcard = props => {
  return (
    <div className="flashcard">
      <div className="frontCard">{props.question}</div>
      <div className="backCard">{props.answer}</div>
    </div>
  );
};

export default Flashcard;
