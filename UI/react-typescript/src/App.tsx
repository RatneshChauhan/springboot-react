import * as React from 'react';
import './App.css';
import Loading from './components/LoadingComponent';
import AppBar from './components/AppBarComponent'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

class App extends React.Component <any,any>{
  constructor(props:any) {
    super(props); 
   }
  
  render() { 
    
    return (
      <div > 
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        
           <AppBar /> 
           <Loading/> 
          
        </MuiThemeProvider>

        <em id="em">Powered by<h4 id="poweredBY">Spring-Boot, JWT, MySQL and Material-UI</h4></em>

      </div>
    );
  }
}

export default App;
