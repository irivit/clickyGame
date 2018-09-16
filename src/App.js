import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Character from "./characters.json";
import NavBar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import "./App.css";


const App = () => (
      
      <Wrapper>
        <NavBar/>
        <Jumbotron/>
         <CharacterCard image={Character[0].image} />
         <CharacterCard image={Character[1].image} />
         <CharacterCard image={Character[2].image} />
         <CharacterCard image={Character[3].image} />
         <CharacterCard image={Character[4].image} />
         <CharacterCard image={Character[5].image} />
         <CharacterCard image={Character[6].image} />
         <CharacterCard image={Character[7].image} />
         <CharacterCard image={Character[8].image} />
         <CharacterCard image={Character[9].image} />
         <CharacterCard image={Character[10].image} />
         <CharacterCard image={Character[11].image} />
       </Wrapper>
)

export default App;