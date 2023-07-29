import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Home from './components/Home';
import Headers from './components/Headers';
import Publications from './components/Publications';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/footers';

function App(){
  return(
    <div className="container">
      <Router>
        <div className="main">
            <Headers />
        </div>
      
      <Switch>
        <div className="boby">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Publications" component={Publications} />
            <Route path="/Contact" component={Contact} />
        </div>
        

      </Switch>

      
      <Footer />


      </Router>
    </div>
    
  );
}

export default App;