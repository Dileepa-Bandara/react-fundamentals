import React from "react";
import Greet from "./components/Greet";
import PersonObject from "./components/PersonObject";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Nalaka",
    last: "Dissanayake",
  };

  const personList = [
    { first: "Dileepa", last: "Bandara" },
    { first: "Jaya", last: "Anupama" },
  ];

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>React + Typescript</h1>
      <h2>Typing Props(Typescript)</h2>
      <Greet name="Dileepa" count={10}></Greet>
      <p>
        We can use only String type values to the name props.Bcose We decalred
        type GreetProps object property as name:String
      </p>
      <h2>Basic Props(Typescript)</h2>
      <h2>Objects as Props(Typescript)</h2>
      <PersonObject personName={personName}></PersonObject>
      <h2>Arrays as Props(Typescript)</h2>
      <PersonList names={personList}></PersonList>
      <h2>Adavanced Props(Typescript)</h2>
      <Status status="loading">
        This is the children of the status component
      </Status>
    </div>
  );
}

export default App;
