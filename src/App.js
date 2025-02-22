import React from "react";
import Header from "./components/Header";  
import Home from "./components/Home";
import "./styles.css";  
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Header />
      <section id="home"><Home /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;