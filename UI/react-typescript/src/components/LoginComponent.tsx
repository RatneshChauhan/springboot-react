import * as React from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
 


interface Props {
  openDialog:any
  
  
  }
  
interface State {
    data:any [] ;
    hasError:any;
    header:any;
    name:string;
    password:string;
    openDialog:any
  }

export default class LoginComponent extends React.Component<Props,State> {
    constructor(props:Props) {
      super(props);
      this.state={
        data:[],
        hasError:'',
        header:'',
        name:'',
        password:'',
        openDialog:false
       
      }
    }

      login = () => {
        
       let Customer={
        username:this.state.name,
        password:this.state.password
        }

        fetch('/api/customer/login', {
          body: JSON.stringify(Customer),             
          cache: 'no-cache', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            method: 'POST', 
          })
         .then( (response) => {
             if(response.status===200){

               

                this.setState({
                    header:response.headers.get('Authorization'),
                    hasError:'',         
                })
                localStorage.setItem('auth',this.state.header);
               // passing prop to parent component DialogComponent.tsx
               this.props.openDialog(false);
            }
            else { // unauthorized
                localStorage.removeItem('auth')
                this.setState({
                    hasError:response.statusText
              }) 
            }   
        });
      };

       openDialog=()=> {
              this.setState({
                openDialog:true
              })
            }


      handleUNameChange=(event:any)=> {
        this.setState({
            name: event.target.value  
        });
      }
      
      handlePasswordChange=(event:any)=> {
        this.setState({
            password: event.target.value
        });
      }

      render() { 
        
        
        return (
        <div>
            
            
    
    <TextField
      hintText="Username"
      floatingLabelText="Please enter username"
      value={this.state.name} onChange={this.handleUNameChange}
      errorText={this.state.hasError?'Access Denied':''}
      
    />
    <TextField
      hintText="Password"
      floatingLabelText="Please enter password"
      type="password"
      value={this.state.password} onChange={this.handlePasswordChange}
      errorText={this.state.hasError}
    />
    <FlatButton label="Login" primary={true}  onClick={this.login}
    />        
    
</div>
        )
    }
}
