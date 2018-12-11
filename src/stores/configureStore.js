/**
 * Created by saionara1 on 6/21/17.
 */

import {
  autoRehydrate,
  persistStore
} from "redux-persist-immutable";
import {
  combineReducers
} from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import {
  REHYDRATE
} from "redux-persist/constants";
import Immutable from "immutable";
import {
  applyMiddleware,
  compose,
  createStore
} from "redux";
import {
  AsyncStorage,
  NativeModules
} from "react-native";
import loginReducer from "../reducers/loginReducer";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import * as loginSaga from "../sagas/login-saga";


const combinedReducers = combineReducers({
  root: rootReducer,
  login: loginReducer,
});

const initialState = new Immutable.Map({
  root: Immutable.Map({
    progress: undefined,
  }),
  login: Immutable.Map({
    isLoggedIn: false,
    token: '',
    loginError: {},
    username: '',
    password: '',
    authorizationId: ''
  })
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combinedReducers,
    initialState,
    compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({
      log: true
    })));
  const lang = (NativeModules.I18nManager.localeIdentifier)
    ? NativeModules.I18nManager.localeIdentifier
    : NativeModules.SettingsManager.settings.AppleLocale;
  
  AsyncStorage.getItem('lang').then(data => {
    if (!data) {
      store.dispatch({ type: 'SET_LANG', payload: AsyncStorage.setItem('lang', lang) });
    }
  });
  persistStore(
    store, {
      storage: AsyncStorage,
      blacklist: ['root'],
    }
  );
  return {
    ...store,
    runSaga: [
      sagaMiddleware.run(loginSaga.loginFlow)
    ]
  };
}