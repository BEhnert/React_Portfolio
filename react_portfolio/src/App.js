import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Views/Home"
import Projects from "./components/Views/Projects"
import Resume from "./components/Views/Resume"
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./components/Views/style.css"

function App() {
  return (
    <div>
      <Router>
        <div>
        <NavBar />  
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
