import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Made } from "./components/made/made"

function App() {
  return (
     <div className={styles.App}>
      <Navbar />
      <Hero />
      <hr></hr>
      <About />
      <hr></hr>
     <Experience />
     <hr></hr>
      <Projects />
      <hr></hr>
      <Contact />
      <Made></Made>
    </div>
  );
};

export default App;
