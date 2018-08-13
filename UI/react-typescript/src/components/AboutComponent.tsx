import * as React from 'react';
import {Card,  CardHeader,  CardTitle, CardText} from 'material-ui/Card';
import '../About.css';
//import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
const logo = require('../DEV.JPG');

export default class AboutComponent extends React.Component<any,any> {

  constructor(props:any) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded:any) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event:any, toggle:any) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
        
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
         
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="About Me"
          />
        </CardText>
        
        <CardHeader expandable={true}
          title="Ratnesh Chauhan - Full Stack Developer"
          subtitle="Technical Specialist"
          avatar={logo}
          
          actAsExpander={true}
          showExpandableButton={true}
        /> 

        <CardTitle title="Introduction" subtitle="Technical Specialist" expandable={true} />

        <CardText expandable={true}>
      
          I have more than 10 year's of working experience in UI/UX development, Server programming, APIs, Database design 
          and development.
          I have the ability to develop an application or a product end to end, i.e., from scratch to live deployment.
          I have been developing applications and products using MySQL as database, Spring, Hibernate for business logic and 
          data access and JQuery, Angular and React for presentation (along with HTML and CSS ), Apache Web Server to serve my 
          application and finally run  entire application on Windows and/or Linux OS.
          The stack of software technologies I have worked on

          <ul>
           <li>I Know how to work around a Windows or Linux operating system.</li>
           <li>I Know how to work around a relational database (E.g.: MySQL, Oracle, etc.)</li>
           <li>I'm strong in Java, SQL, HTML, CSS and Javascript.</li>
           <li>I Know how to use a web frameworks like
              Servlets, JSP, JSF, SpringMVC, Struts, GWT  etc.</li>
           <li>I Know how to use DI frameworks like Spring</li>
           <li>I Know how to use ORM frameworks like Hibernate.</li>
           <li>I Can write and setup the various testing strategies (unit tests, integration test, etc.) using tools 
             like JUnit, Mockito, etc.</li>
           <li>
               I Know associated infrastructure technologies for logging, caching, security, queues etc. 
               (Log4J, ehcache, Spring security, ElasticSearch, ActiveMQ etc.)</li>
          <li>I Know how to work with a Version Control System (VCS) like SVN, Git, TFS etc.</li>
          <li>I Know some devops tools (for CI/CD) like Jenkins, Hudson etc. </li>
          <li>I know how to build UI using JQuery, Angular, React, Bootstrap etc.</li>
             
          </ul>
           
        </CardText>
        {/* <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions> */}
      </Card>
      
    );
  }
}
