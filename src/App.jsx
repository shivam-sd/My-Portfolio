import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Services from './Components/Services/Servisecs'
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import OpenChat from "./Components/OpenChat/OpenChat";

const App = () => {
  return (
    <div>
      <OpenChat />
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Services/>
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

// pokemon
// twiter clone
// news app
//movie search app
// hotel rooms
// netflix
