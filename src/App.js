import Navigation from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Tech from "./components/Tech";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Space from "./components/space";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Space />
      <Tech />
      <Space />
      <Projects />
      <Space />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
