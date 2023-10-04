import "./App.css";
import Area from "./Components/Area/Area";
import ChooseUs from "./Components/ChooseUs/ChooseUs";
import ChooseUsCard from "./Components/ChooseUsCard/ChooseUsCard";
import Hero from "./Components/Hero/Hero";
import Introduction from "./Components/Introduction/Introduction";
import NavBar from "./Components/NavBar.jsx/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Introduction />
      <ChooseUs />
      <ChooseUsCard />
      <Area />
    </div>
  );
}

export default App;
