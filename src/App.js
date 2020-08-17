import React, { Fragment,Component } from 'react';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
class App extends Component {

  render  (){
    
    
    return (
   
      <Fragment>
        <Navbar/>
        <Home/>
        
        <Footer />
      </Fragment>
    );
  }
}

export default App;
