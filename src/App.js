import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header></Header>
        <Hero></Hero>
        <Companies></Companies>
      </div>
    </div>
  );
}

export default App;
