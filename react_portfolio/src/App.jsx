import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Views/home"
import Projects from "../src/components/Views/projects"
import Resume from "../src/components/Views/resume"

function App() {
  return (
    <div>
      <Router>
        <div>
          <div className="container"></div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              {/* Route path to Search Page */}
              <Projects />
            </Route>
            <Route path="/resume">
              {/* Route path to Input Page */} 
              <Resume />
              </Route>
            <Route path="/">{/* Route path to Login Page */}</Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
