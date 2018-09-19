import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import character from "./characters.json";
import NavBar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import "./App.css";


//This function change randomly the position of the paintings
function changePositions(array) {
  array.sort(function (a, b) { return 0.5 - Math.random() });
  return array;
};

class App extends Component {

//Setting the state
  state = {
    character,
    actualScore: 0,
    topScore: 0,
    clicked: []
  };

//Function to handle the scores and control when the user win or loss
  handleIncrement = () => {
    const newScore = this.state.actualScore + 1;
    if (newScore === 12) {
      alert("You win!");
      this.handleReset();
    }else {
      this.setState({
        actualScore: newScore
      })
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore 
        });
      }
    }
    this.handlePosition();
  };


  //Function to listen when an image has been clicked
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.state.clicked.push(id);
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked });
      console.log(this.state.clicked);
    } else {
      alert("You lost!");
      this.handleReset();
    }
  };
  
// Function to reset the game
  handleReset = () => {
    this.setState({
      actualScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handlePosition();
  };

  //Calling the function to rearrange the array
  handlePosition = () => {
    let changePosition = changePositions(character);
    this.setState({ character: changePosition });
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.actualScore}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Container>
          <Row>

            {this.state.character.map(character => (
              <Column size="md-3 sm-6">
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handlePosition={this.handlePosition}
                  id={character.id}
                  image={character.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
};

export default App;