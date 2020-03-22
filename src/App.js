import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import RegisterHook from './components/RegisterHook'
import UserDetails from './components/UserDetails'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/home' component={Home} />
        <Route path='/UserDetails' component={UserDetails}/>
        
        

      </Router>
    </div>
  );
}

export default App;
