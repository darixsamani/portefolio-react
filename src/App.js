import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Home from './components/Home';
import Headers from './components/Headers';
import './App.css';
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
            <Route path="/resume" component={Resume} />
        </div>
      </Switch>
      
      <Footer />
      
      </Router>
    </div>
    
  );
}

export default App;