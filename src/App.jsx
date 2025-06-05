import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Hero from "./component/hero";
import NavBar from "./component/navBar";
import Profile from "./component/profile";
import Skills from "./component/skills";
import Footer from "./component/footer";
import Projects from "./component/projects";
import Contact from "./component/contact";

function App() {
  useEffect(() => {
    document.title = "Refaat Somaia"
  }, [])
  return (
    <>
      <NavBar />
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}




export default App;
