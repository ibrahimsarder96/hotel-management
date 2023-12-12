import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Companies/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header></Header>
        <Hero></Hero>
        <Companies></Companies>
        <Residencies></Residencies>
        <Value></Value>
        <Contact></Contact>
        <GetStarted></GetStarted>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
