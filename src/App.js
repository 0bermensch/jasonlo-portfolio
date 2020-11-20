import React from "react";
import { Link } from "react-scroll";
import Introduction from "./components/Introduction";
import Information from "./components/Information";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Navigation from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Information />
      <Tech />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
