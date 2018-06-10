import* as  React from 'react';

export default class TabsExampleControlled extends React.Component<{},{}> {

    render() {
      
        return (
            <div>

<ul>
             <li>React – A JavaScript library for building user interfaces. Allows us to compose simple yet powerful UIs.</li>
             <li>ReactRouter – Organizes the URL navigation in our React application.</li>
             <li>ES6 – The next version of JavaScript. Allows us to write real JavaScript classes.</li>
            <li> With the ES6 classes syntax we don't use getInitialState. Instead we use: this.state = {} in constructor method.</li>
             <li>JSX – Allows us to place HTML in JavaScript without concatenating strings.</li>
             <li>JWT – For token based user authentication and authorization  </li>
             <li>Webpack – Allows us to pack all of our JavaScript files into one bundle.</li>
             <li>Typescript - To transpile our ES6 and TSX (or JSX) into ES5 and Javascript.</li>
             <li>Babel – Allows us to transpile our ES6 and JSX into ES5 and Javascript.</li>
             <li>Material Design for Bootstrap (React version) – Because we want things to be pretty.</li>
             <li>Material-UI – Because we want things to be pretty.</li>
             <li>React provides some methods that are triggered at various points from creating a component up until the component is destroyed. This is called the Component's Lifecycle. You can declare methods to hook into the component's lifecycle to control the behaviour of components in your app.
                Some examples of these lifecycle hooks are componentDidMount(), componentWillMount(), 
                componentWillUnmount(), shouldComponentUpdate(), componentWillUpdate() and more...</li>
             <li> A react component cannot update its own props unless they are arrays or objects
                 (having a component update its own props even if possible is an anti-pattern),
                  but can update its state and the props of its children.</li>
</ul>
                
            </div>
        )
    }


}