import* as  React from 'react';
import LearnReactComponent from './LearnReactComponent'
import ServerData from './ServerDataComponent';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import ErrorBoundary from './ErrorBoundary'




const paperStyle = {
  height: 475,
  width: 1000,
  margin: 15, 
  display: 'inline-block',
};



interface State {
   value:any
   showComponent:boolean
}

export default class TabsExampleControlled extends React.Component<{},State> {

  constructor(props:any) {
    super(props);
    this.state = {
      value: 'a',
      showComponent:false
    };
  }

  handleChange = (value:any) => {
    if(value==='a'){
      this.setState({
        showComponent:false
      })
    }
    this.setState({
      value: value,
    });
  };

showTable=()=>{
this.setState({
  showComponent:true
})
}

  render() {
    return (
      <div>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Information Paper" value="a">
         
            <Paper style={paperStyle} zDepth={5} rounded={false} >
            
            <LearnReactComponent/>
            
            </Paper>
           
          
        </Tab>
        <Tab label="All Users" value="b" onActive={ this.showTable }>
       
          <div>  
          {
            this.state.showComponent ?
           <ErrorBoundary>
           <ServerData/> 
           </ErrorBoundary> :
           null
        }
            
          </div>
          <p>
        <br/>
                
        </p>
        </Tab>
      </Tabs>
      </div>
    );
  }
}