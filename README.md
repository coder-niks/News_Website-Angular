# News_Website

Table of Contents
What is this?
Features
Requirements
Installation
Run Application and start development Server
Run Tests
Run UI Tests
Build Application for Deployment
Why bower AND npm?
Bugs / Feature request

What is this?
This small AngularJS application contains some simple examples explaining the components of angular. It tries to use the best-practice design pattern for everything and is inspired by following projects:

johnpapa/angular-styleguide
angular/angular-seed
paislee/healthy-gulp-angular
lordkada/healthy-gulp-angular
Gregor Woiwode
Features
Beside the AngularJS demonstrations this package even contain a complete setup. Usable as template for future projects. Containing:

dependency loading and startup with npm and bower
better IDE support with jshin by .jshintrc file
included simple development web-server with node.js and express
testing angular with jasmin and karma
ui testing with jasmin and protractor
deployment build with gulp
Requirements
You need node.js with npm on your machine. For some automatically npm builds you will even need a version of python installed, but this is not necessary to run the app itself.

Installation
This app will install all required dependencies automatically. Just start the commands below in the root folder where you stored the package.

$ npm install
Run Application and start development Server
To run this app in your browser just start everything whit the comment below in the applications root folder. It will update everything an start a simple web server on http://localhost:4200/

$ npm start
Run Tests
All unit tests are performed with jasmin and karma and can be configured in karma.conf.js. Predefined are dependencies for PhantomJS, Firefox and Chrome. On windows you may have to define the environment variables FIREFOX_BIN and CHROME_BIN to locate your browsers correctly.

Run command below to execute all unit test:

$ npm test
Run UI Tests
All end-to-end tests are performed with jasmin and protractor and can be configures in protractor.conf.js. Make sure your development web-server and webdriver-manager is running. You will need three open shells to accomplish that.

You can run test in different Browsers. By default of this package Chrome is predefined. On windows you my need to add the installation path of your browsers to the PATH environment variable.

Start Web-Server:

$ npm start
Start Webdriver-Manager:

$ npm run start-webdriver
Execute e2e tests:

$ npm run protractor
Build Application for Deployment
Development and productive builds are handled by gulp. There are a bunch of pre-defined task you can execute. To build a clean productive environment run the task below. The result will be stored unter dist/productive/

$ gulp clean-build-app-prod
Why bower AND npm?
It is possible to do everything by package.json over npn. But the idea is to split the dependencies in development and browser/client files. So npm contains everything for development, and bower defines the dependencies available to the user in browser.

Bugs / Feature request
Please report bugs and feel free to ask for new features directly on GitHub.