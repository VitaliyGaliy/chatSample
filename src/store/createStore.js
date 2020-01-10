import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from 'redux';
import thunk from 'redux-thunk';
import Config from 'react-native-config';

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const middlewares = [thunk];


export default function createStore(reducers) {

  console.tron = Reactotron;

  Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())

  if (Config.ENV === 'development') {
    Reactotron.connect();
  }
  return createReduxStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      Reactotron.createEnhancer(),
    ),
  );
}
