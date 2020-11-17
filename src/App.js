import React from "react";
import Introduction from "./components/Introduction";
import Information from "./components/Information";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Information />
      <Tech />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
