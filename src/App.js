import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Projects from './Projects'
import Home from './Home';
import Contact from './Contact';
import Resume from './Resume';
import About from './About'

function App(
) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Resume">
              <Resume />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;