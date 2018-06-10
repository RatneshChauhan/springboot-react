import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Login from './LoginComponent'


interface Props {
    title:string
    body:string  
    buttonLabel:string
    showLoginForm:boolean
  }

interface State {
    open:boolean
  }

export default class DialogComponent extends React.Component<Props,State> {
    constructor(props:Props) {
      super(props);
      this.state = { open: true };
    }

       componentWillReceiveProps(props:any){
          this.setState({open: true});
      };

       handleClose = (data:boolean) => { 
          this.setState({open: data});   
      };

      handleCloseDialog = () => {
          this.setState({open: false});
      };


    render(){
        const actions = [
            <FlatButton
              label={this.props.buttonLabel}
              primary={true}
              onClick={this.handleCloseDialog}/>,
           
          ];
          return <div>
             
          <Dialog
          title={this.props.title}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}  
            >
            <p>{this.props.body}</p>
           {this.props.showLoginForm?<Login openDialog={this.handleClose}  />: ""}  
          </Dialog>
        </div>  
    }

}

