// src/App.js
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './index.css';
import logo from './images/logo-new.png';
import Carousel from './componenets/Carousel';
import Experinse from './componenets/Experinse';
import Value from './componenets/Value';
import TeamMember from './componenets/Team';
import Result from './componenets/Result';
import Service from './componenets/service';
import Impact from './componenets/Impact';
import Solution from './componenets/Solution';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';
import Geowth from './componenets/Geowth';
import ProgressBar from './componenets/ProgessBar'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <MainContent />}
      <ProgressBar />
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <section id="home">
        <Carousel />
      </section>
      <Experinse />
      <Value />
      <section id="about-us">
        <TeamMember />
      </section>
      <Result />
      <section id="services">
        <Service />
      </section>
      <Impact />
      <Solution />
      <Geowth />
      <section id='contactUs'>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
