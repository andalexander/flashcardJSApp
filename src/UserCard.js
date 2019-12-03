// firebase.js
import React, { Component } from "react";
import { dbRef } from "./firebase";

class UserCard extends Component {
  //Function to push users inputted Question & Answer to the Firebase

  // Taking the input from the user and saving it to userQuestion & userAnswer state.
  handleQuestionChange = event => {
    const userInputQuestion = event.target.value;
    this.props.sendUserQuestionToFirebaseProp(userInputQuestion);
  };

  handleAnswerChange = event => {
    const userInputAnswer = event.target.value;
    this.props.sendUserAnswerToFirebaseProp(userInputAnswer);
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
              className="userInput"
              placeholder="Enter a question"
              onChange={this.handleQuestionChange}
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
              className="userInput"
              placeholder="Enter the answer"
              onChange={this.handleAnswerChange}
            />
          </div>
        </div>
        <div className="submissionButton">
          <button
            onClick={this.props.pushUsersInputProp}
            className="usersButton"
          >
            Submit Card
          </button>
        </div>
      </div>
    ); //end of App RETURN
  } //end of App RENDER
} //end of class APP

export default UserCard;
