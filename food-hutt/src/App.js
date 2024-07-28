import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Offer from "./components/SpecialOffer.js";
import Menu from "./components/Menu.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Offer />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
