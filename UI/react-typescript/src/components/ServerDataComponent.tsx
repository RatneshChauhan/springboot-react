import * as React from 'react';

import {Table, TableBody, TableHeader, TableRow,
  TableHeaderColumn, TableRowColumn} from 'material-ui/Table';
  

interface Props {}

interface State {
  id: number;
  name: string;
  lastName: string;
  createdAt: string;
  updatedAt:string,
  data:any [] ;
  hasError:any;
  token:any;
 
}

export default class ServerDataComponent extends React.Component<Props, State> {
    constructor(props:Props) {
      super(props); 
      this.state ={
        // Set your state here
        id:0,
        name:'',
        lastName:'',
        createdAt:'',
        updatedAt:'',
        data:[],
        hasError:'',
        token:localStorage.getItem('auth')
        
        
        }
     
    }
    
    componentWillMount(){
    // this will be called before the component is mounted 
  
 
    }

      componentDidMount() {  
     // this will be called after the component is mounted

      fetch('/api/customer/all',{
        headers: {
          'Authorization': this.state.token,
          'Content-Type': 'application/json'}
      }).then( (response) => { 
        if(!response.ok){
          this.setState({
            hasError:response.statusText
          })
         } 
        return response.json()    
      }) .then( (json) => {
       this.setState({
           data:json
     })
    console.log('server json', json)
     })
    }
    
    render() { 
    if(this.state.hasError){
      throw new Error('Unauthorized');
    }
      return (
        
 <div>    
<Table multiSelectable>

<TableHeader>
  <TableRow>
    <TableHeaderColumn>ID</TableHeaderColumn>
    <TableHeaderColumn>Name</TableHeaderColumn>
    <TableHeaderColumn>Last Name</TableHeaderColumn>
    <TableHeaderColumn>Created At</TableHeaderColumn>
    <TableHeaderColumn>Updated At</TableHeaderColumn>
  </TableRow>
</TableHeader>
<TableBody
>
  {this.state.data.map((user, i) =>
    <TableRow key={i}  >
      <TableRowColumn >{user.id}</TableRowColumn>
      <TableRowColumn>{user.firstName}</TableRowColumn>
      <TableRowColumn>{user.lastName}</TableRowColumn>
      <TableRowColumn>{user.createdAt}</TableRowColumn>
      <TableRowColumn>{user.updatedAt}</TableRowColumn>
    </TableRow>
  )}
</TableBody>
</Table>
</div>
      );
    }
  }