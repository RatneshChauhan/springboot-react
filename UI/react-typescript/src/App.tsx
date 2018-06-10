import * as React from 'react';
import './App.css';
import Loading from './components/LoadingComponent';
 import AppBar from './components/AppBarComponent'

//import Toggle from 'material-ui/Toggle';

//const logo = require('./logo.svg');

class App extends React.Component <any,any>{
  constructor(props:any) {
    super(props); 
  
  }
  
  render() { 
    
    return (
      <div > 
           <AppBar /> 
          <Loading/> 
        
        <em id="em">Powered by<h4 id="poweredBY">Spring-Boot, JWT, MySQL and Material-UI</h4>
          </em>

      </div>
    );
  }
}

export default App;
