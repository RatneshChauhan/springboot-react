import * as React from 'react';
import Dialog from './DialogComponent'

interface State {
    
    hasError:boolean
    errorDescription:any
    open: boolean,
   
  }

export default class ErrorBoundary extends React.Component<{},State> {
    constructor(props:any) {
      super(props);
      this.state = { hasError: false,errorDescription:'',open: false };
    }
  
    componentDidCatch(error:any, info:any) {
      //force log out user by removing JWT from storage in case of any error
      localStorage.removeItem('auth');
      this.setState({ hasError: true,errorDescription:error, open:true });
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // Display fallback UI

        // You can render any custom fallback UI. We're using Material-ui dialog component here

        // When an unauthorized access is attempted, we will present a login form to the user
        if(this.state.errorDescription.message==='Unauthorized'){
          return <div>
          <Dialog title='Access Denied' 
          body='Please login to continue' 
          buttonLabel="OK" showLoginForm={false}/>
          </div>
        }

        // When REST API call fails to retrieve data
        else if(this.state.errorDescription.message==='Data Fetch Error'){
          //To show error occured during fetching the data through REST API, see showLoginForm is false here
          return <div>
          <Dialog 
          title='Could not retrieve data from database'
           body='Please make sure database is up and spring boot application is running!'
            buttonLabel="Continue" showLoginForm={false}/>
          </div>  
        }  

        //To show all other errors during component rendering
        else{  
          return <div>
            <Dialog title='Unexpected Error'
             body='Oops! Something went wrong! Please try again!' buttonLabel="Close"
             showLoginForm={false}/>

          </div>
        }
         
      }
      else{
        return this.props.children;
      }
      
    }
  }