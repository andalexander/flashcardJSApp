// firebase.js
import React, { Component } from "react";
import { dbRef, dbRefDatabase } from "./firebase";

class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      flashcard: [],
      counter: 0,
      currentQuestion: "",
      currentAnswer: "",
      showUserInputs: false
    };
  }

  //Function to push users inputted Question & Answer to the Firebase
  pushUsersInput = e => {
    e.preventDefault();
    dbRefDatabase.ref(`card${this.props.flashcardLength + 1}`).update({
      question: this.state.currentQuestion,
      answer: this.state.currentAnswer
    });
  };

  //Render cycle. This is where I am creating the users inputs.
  render() {
    return (
      <div>
        <div className="inputFlex">
          <div className="userInputs">
            <p>Enter your custom card question:</p>
            <label htmlFor="userQuestionInput" className="visuallyHidden">
              Enter your custom flashcard question.
            </label>
            <input
              type="text"
              id="userQuestionInput"
              class="userInput"
              placeholder="Enter a question"
            />
          </div>
          <div className="userInputs">
            <p>Enter your custom card answer:</p>
            <label htmlFor="userAnswerInput" className="visuallyHidden">
              Enter your custom flashcard answer.
            </label>
            <input
              type="text"
              id="userAnswerInput"
              class="userInput"
              placeholder="Enter the answer"
            />
          </div>
        </div>
        <div className="submissionButton">
          <button onClick={this.pushUsersInput} class="usersButton">
            Submit Card
          </button>
        </div>
      </div>
    ); //end of App RETURN
  } //end of App RENDER
} //end of class APP

export default UserCard;
