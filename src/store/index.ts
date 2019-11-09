import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from '../epics';
import rootReducer from '../reducers';

export default function configureStore(initialState?) {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(epicMiddleware),
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  // @ts-ignore
  epicMiddleware.run(epics);
  return store;
}
