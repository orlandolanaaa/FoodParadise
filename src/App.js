import React, { Component } from 'react';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import City from './pages/City'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
class App extends Component {

  render  (){
    return (
   
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/city/:city_id" component={City}></Route>
        <Footer />
      </Router>
    );
  }
}

export default App;
