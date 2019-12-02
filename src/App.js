import React, { Component } from "react";
import dbRef from "./firebase";
import Flashcard from "./flashcards";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flashcard: [],
      counter: 0,
      currentQuestion: "",
      currentAnswer: ""
    };
  }

  //Pulling data from Firebase database
  componentDidMount() {
    dbRef.on("value", response => {
      const flashcardArrayCopy = [];
      const data = response.val();
      for (let key in data) {
        flashcardArrayCopy.push(data[key]);
      }
      this.setState({
        flashcard: flashcardArrayCopy
      });
      console.log(this.state.flashcard);
    });
  }

  //Randomizing function for generating random card.
  getRandomCard = () => {
    const randomCard = Math.floor(Math.random() * this.state.flashcard.length);
    this.setState({
      counter: randomCard
    });
  };

  //Function for the on click event.
  handleClick = e => {
    e.preventDefault();
    this.getRandomCard();
    const randomCardNumber = this.state.counter;
    const question = this.state.flashcard[randomCardNumber].question;
    const answer = this.state.flashcard[randomCardNumber].answer;
    const splitAnswer = this.handleSplit(answer);
    this.setState({
      currentQuestion: question,
      currentAnswer: answer
    });
  };

  handleSplit = stringToSplit => {
    return stringToSplit.split("**");
  };

  //Render cycle. This is where I am calling my flashcards from Firebase and mapping them to the card on the page.
  render() {
    return (
      <div className="wrapper">
        <main>
          <h1>JS Flashcards</h1>
          <div className="gameWindow">
            <div className="flashcard">
              <div className="flashcardInner">
                <div className="frontCard">{this.state.currentQuestion}</div>
                <div className="backCard">{this.state.currentAnswer}</div>
              </div>
              {/* End of flashcardInner */}
            </div>
            {/* End of flashcard */}
            <div className="userButtons">
              <button onClick={this.handleClick}>Start</button>
              <button onClick={this.handleClick}>Create your own</button>
            </div>
          </div>
          {/* End of gameWindow */}
        </main>
      </div>
    ); //end of App RETURN
  } //end of App RENDER
} //end of class APP

export default App;

//Create line break where "**" appears in keys.
// handleSplit = stringToSplit => {
//   return stringToSplit.split("**");
// };

// Nicks thing:

//Render "question" key to frontCard:

//Render "question" key to backCard:
// renderBackCard = () => {
//   if (this.state.flashcard[this.state.counter]) {
//     const answerString = this.state.flashcard[this.state.counter][1];
//     return this.handleSplit(answerString);
//   }
// };

//Create line break where "**" appears in keys.
// handleSplit = stringToSplit => {
//   return stringToSplit.split("**").map(codePiece => {
//     return <div>{codePiece}</div>;
//   });
// };

{
  /* <div className="frontCard">{this.renderFrontCard()}</div>
                  <div className="backCard">{this.renderBackCard()}</div> */
}

//Append
