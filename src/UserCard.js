// firebase.js
import React, { Component } from "react";
import { dbRef, dbRefDatabase } from "./firebase";

class UserCard extends Component {
  //Function to push users inputted Question & Answer to the Firebase
  handleFirebaseUpdate = () => {
    console.log(this.props.userQuestion);
    // dbRefDatabase.ref(`card${this.props.flashcardLength + 1}`).update({
    //   question: this.props.userQuestion,
    //   answer: this.props.userAnswer
    // });
  };

  //Render cycle. This is where I am creating the users inputs.
  render() {
    return <div>{console.log(this.props.userQuestion)}</div>; //end of App RETURN
  } //end of App RENDER
} //end of class APP

export default UserCard;
