import * as React from 'react';

interface Props {name:string}
interface State { counter:number }
export default  class Welcome extends React.Component <Props, State> {
  render() {
    return <h1>Welcome, {this.props.name}</h1>;
  }
}