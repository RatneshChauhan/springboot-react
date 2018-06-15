import * as React from 'react';

import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import Login from './LoginComponent'
import About from './AboutComponent'



interface State {
    openDialog:boolean;
    
    }
export default class AppBarComponent extends React.Component <any,State>{

    constructor(props:any) {
      
      super(props); 
      this.state={
        openDialog:false,
        
      }
     
    }

    handleClose = () => { 
      this.setState({openDialog: false});   
  };

    Logged = () => (
        <IconMenu
         
          iconButtonElement={
            <IconButton><MoreVertIcon color="white"/></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="About Me" tabIndex={1} />
          <MenuItem primaryText="Help" tabIndex={2}/>
          <MenuItem primaryText="Sign out" onClick={this.handleLogout} tabIndex={3} />
        </IconMenu>
      );
      //Logged.muiName = 'IconMenu';
    handleLogin = () => {
    this.setState({
      openDialog:true
    })
    }
    handleLogout = () =>{
      localStorage.removeItem('auth');
      this.setState({
        openDialog:false 
      })
    }
    
render() { 
  const actions = [
    <FlatButton
      label={this.props.buttonLabel}
      primary={true}
      />,
   
  ];
  
    return (

<div>     
      <About/>
          <AppBar
          title={ localStorage.getItem('auth')?"Welcome! Admin":"Login to see more..."} 
          iconElementLeft={<IconButton></IconButton>}   

          iconElementRight={
            localStorage.getItem('auth')? <this.Logged /> : 
          <FlatButton label="Login" primary={true} onClick={this.handleLogin}   />
        }
        />
        
         {this.state.openDialog?
               <Dialog
               title='Login'
            actions={actions}
            modal={false}
            open={this.state.openDialog}
            onRequestClose={this.handleClose}  
              
               >
          {<Login openDialog={this.handleClose}  />}
               </Dialog>:""
            }  
</div>

    );
}
}