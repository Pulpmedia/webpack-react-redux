# webpack-react-redux
A boilerplate for react, redux and react-router with the help of webpack.

Contains: 

* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable
* Redux Thunk
* Redux Logger for dev
* much more...

## Helpers

Install the Redux Devtools extension to use in your browser:
[Download](https://github.com/zalmoxisus/redux-devtools-extension#installation)


## Run the app

0. ```npm install``` or ```yarn install```
0. ```npm start```

Yes, it takes a while to load the first time you open the app.

### Is the hot module replacement really working?

Yup! Take a look:


The app updates without the browser having to reload. You don't lose state!

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

