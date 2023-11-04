import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <div>
        <Hero />
        <Navbar />
        <About />

        <Services />
      </div>
    </div>
  );
}

export default App;
