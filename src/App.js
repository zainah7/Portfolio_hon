import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurClient from "./components/OurClients";
// import RecentWorks from "./components/RecentWorks";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Navbar />
        <About />
        <Services />
        {/* <RecentWorks /> */}
        <OurClient />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
