import * as React from 'react';
import { BarLoader} from 'react-spinners';
import Tab from './TabComponent';

export default class LoadingComponent extends React.Component<any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentWillUpdate(){
       // This will be called everytime the state is changed.Not used currently, I may use it later
  }
  render() {
    if(this.state.loading){
      setTimeout(() => {
        this.setState({loading: false});
      }, 3000) // 3 seconds

      return (
        <div className='sweet-loading'>
          <BarLoader width={1535} height={3}
            color={'red'}
            loading={this.state.loading} 
          />
         
        </div>
      )
    }
    else{
      return (
        <div>
          <Tab/>
        </div>
      )
    }
   
    
  }
}