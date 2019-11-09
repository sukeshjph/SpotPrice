This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.<br />

### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Spot Price
Project uses following libraries other than ones offered by CRA

a) Typesafe-actions:
   Can't describe how much boilerplate it cuts down. It provides typesafe 
   createAction, createReducer, actionType union, Rxjs Epic support etc.

b) Material-UI:
   Few components like IconButton etc are used from Material-UI

c) whatwg-fetch:
   Fetch API for ajax requests(Axios can also be used or Rxjs ajax)

d) Enzyme:
   To support Shallow unit testing using Jest and jsdom
   

e) Rxjs and Redux-Observable:
   Hugely popular library with tons of operators like mergemap,switchMap,concatmap etc. to maange 
   side effects and helping to keep reducer clean and pure.
   
f) Redux Devtool:
   Redux devtool chrome extension detects and loads. Asssits observing redux actions,state changes
   
g) Redux, React-redux:
   No explaination needed :)
   
I try to use newest react hooks as much as possible so no class component is used here.   
   
   



