import * as  React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class TabsExampleControlled extends React.Component<{},{}> {

    constructor(props:any) {
      super(props);
      
    }
    render() {
        return (
    
<MuiThemeProvider>
    <Paper style={style} zDepth={1} rounded={false} >
    
    </Paper>
    <Paper style={style} zDepth={2} rounded={false} />
    <Paper style={style} zDepth={3} rounded={false} />
    <Paper style={style} zDepth={4} rounded={false} />
    <Paper style={style} zDepth={5} rounded={false} />
    </MuiThemeProvider>
        )
    }
}
