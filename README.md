# React + Springboot + MySQL
This project is an integration of Springboot, MySQL database and React app. Material-UI has also been used for beautification.

Tech Stack
================
React for Frontend | Springboot for Middleware (Spring Data REST JPA) | MySQL for Backend

Project Title
==============
React with Spring Boot

Description
====================
* UI is a react app making ajax call to API using Fetch. 
* API is a spring boot REST API fetching data from a MySQL database table through JPA repository.

Developed Using
===================
* React - A JavaScript library for building user interfaces
* Material-UI - A set of React components that implement Google's Material Design specification because we want things to be pretty
* Maven - Dependency Management
* ES6 – The next version of JavaScript. Allows us to write real JavaScript classes.
* JSX – Allows us to place HTML in JavaScript without concatenating strings.
* Typescript (TSC) - To transpile our ES6 and TSX (or JSX) into ES5 and Javascript
* Webpack – Allows us to pack all of our JavaScript files into one bundle
* Springboot - RESTful Spring Boot Microservices with Spring Data JPA (Spring Data REST)
* Hibernate - JPA provider
* MySQL - Database

Prerequisites
=================
* Install node 
* Install npm 
* Install Java (jdk 1.8 is preferred)
* Install Maven 3.x
* Install Eclipse or Spring Tool Suite
* Install Visual Studio Code

Notes
============
 * I created this React app using <code>create-react-app</code>. In the case of create-react-app, you can either install it globally (i.e. <code> $ npm install -g create-react-app </code>) or install it locally (i.e. <code>$ npm install create-react-app </code>). If you choose the latter, you will have to specify its path whenever you invoke it (e.g. path/to/node_modules/.bin/create-react-app). 
 
 * Check Installed Versions
 
    Node: <code>$ node --version
    v8.9.4 </code>
              
    NPM: <code>$ npm  --version
    5.6.0</code>
              
    Create React App: <code>$ create-react-app  --version 
    1.5.2</code>
 

Quick Start Development
============
* git clone https://github.com/RatneshChauhan/Springboot-React-Typescript-Material-UI-MySQL.git
* Imported as maven project in eclipse or sts. Run springboot application on embedded Tomcat. 
* Restore database:
  Create my_customer_db named database on the target machine and run:
  mysql -u root -p my_customer_db <path-to-db_backup>\db_backup.sql to restore the backup
* Run npm start in VSCode
* Hit http://localhost:3000/
* You can now view my-react-app-with-typescript in the browser proxying request /api/customer/all from http://localhost:3000 to http://localhost:8080/ 

Versioning
======================
* Node: 8.9.4
* NPM:  5.6.0
* Create React App: 1.5.2
* Spring Boot: 1.5.10.RELEASE
* React: 16.2.0
* Material-UI: 0.20.0

Deployment
======================

* API
Run  maven command <code>mvn clean install<code> to generate a WAR file deployable in any servlet containers like Tomcat, Jboss, Websphere etc.
 
* UI
 Run <code>npm run build<code> 
 
 It builds the app for production to the build folder.
 It correctly bundles React in production mode and optimizes the build for the best performance.
 The build is minified and the filenames include the hashes.
 Your app is ready to be deployed! 

Author 
===================
Ratnesh Chauhan, Full Stack Developer

Note: Everything is tested on Windows environment

License
===========================
The MIT License (MIT)

Copyright (c) 2018 Ratnesh Chauhan

Permission is hereby granted, free of charge, to any person obtaining a copy of this application and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.
