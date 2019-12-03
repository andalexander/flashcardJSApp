import React, { Component } from "react";
import dbRef from "./firebase";
import { dbRefDatabase } from "./firebase";
import Flashcard from "./flashcards";
import UserCard from "./UserCard";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flashcard: [],
      counter: 0,
      currentQuestion: "",
      currentAnswer: "",
      userQuestion: "",
      userAnswer: "",
      showUserCard: false,
      showIntroCard: true,
      errorMessage: false
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

  //Functions that allow UserCard component access to userQuestion & userAnswer
  sendUserQuestionToFirebase = userQuestionInput => {
    this.setState({
      userQuestion: userQuestionInput
    });
  };

  sendUserAnswerToFirebase = userAnswerInput => {
    this.setState({
      userAnswer: userAnswerInput
    });
  };

  //Function to generate random "Card" from Firebase database.
  handleClick = e => {
    e.preventDefault();
    this.getRandomCard();
    const randomCardNumber = this.state.counter;
    const question = this.state.flashcard[randomCardNumber].question;
    const answer = this.state.flashcard[randomCardNumber].answer;
    // const splitAnswer = this.handleSplit(answer);
    this.setState({
      currentQuestion: question,
      currentAnswer: answer
    });
  };

  //Function to change showUserCard to true so it appears in the "userCustomCard" div when the "this.addUserCardComponent" onClick fires.
  addUserCardComponent = e => {
    e.preventDefault();
    this.setState({
      showUserCard: true
    });
  };

  //Function to push users input values to Firebase
  pushUsersInput = e => {
    e.preventDefault();
    if (this.state.userQuesiton == "" || this.state.userAnswer == "") {
      this.setState({
        errorMessage: true
      });
    } else {
      dbRefDatabase.ref(`card${this.state.flashcard.length + 1}`).update({
        question: this.state.userQuestion,
        answer: this.state.userAnswer
      });
      this.setState({
        userQuestion: "",
        userAnswer: ""
      });
    }
  };

  //Function to hide Intro message.
  hideIntroCardComponent = e => {
    e.preventDefault();
    this.setState({
      showIntroCard: false
    });
  };

  //Render cycle. This is where I am calling my flashcards from Firebase and mapping them to the card on the page.
  render() {
    return (
      <div className="flexParent wrapper">
        <main>
          <h1 className="title">flashCards.js</h1>
          <div className="gameWindow">
            {this.state.showIntroCard ? (
              <div className="introCard">
                <h1>Welcome to flashCards.js!</h1>
                <p>
                  flashCards.js is a JavaScript flashcard game designed to help
                  you learn and remember JavaScript concepts.
                </p>
                <p>
                  Click <span className="introSpan">"Next Card"</span> to
                  randomly generate a JS flashcard or click
                  <span className="introSpan"> "Create your own" </span> to add
                  a custom flaschard to the database!
                </p>
                <button
                  className="letsBegin"
                  onClick={this.hideIntroCardComponent}
                >
                  Let's begin!
                </button>
              </div>
            ) : null}
            <div className="flashcard">
              <div className="flashcardInner">
                <div className="frontCard">{this.state.currentQuestion}</div>
                <div className="backCard">{this.state.currentAnswer}</div>
              </div>
              {/* End of flashcardInner */}
            </div>
            {/* End of flashcard */}
            <div className="userButtons">
              <button onClick={this.handleClick}>Next card</button>
              <button onClick={this.addUserCardComponent}>
                Create your own
              </button>
            </div>
            <div className="userCustomCard">
              {this.state.showUserCard ? (
                <UserCard
                  flashcardLength={this.state.flashcard.length}
                  sendUserQuestionToFirebaseProp={
                    this.sendUserQuestionToFirebase
                  }
                  sendUserAnswerToFirebaseProp={this.sendUserAnswerToFirebase}
                  pushUsersInputProp={this.pushUsersInput}
                  ifUserHasError={this.ifUserHasError}
                />
              ) : null}
            </div>
            {this.state.errorMessage ? (
              <span className="errorMessage">
                Please ensure both question and answer are filled
              </span>
            ) : null}
          </div>
          {/* End of gameWindow */}
        </main>
      </div>
    ); //end of App RETURN
  } //end of App RENDER
} //end of class APP

export default App;
