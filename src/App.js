import React, {Component} from "react";
import {Provider} from "react-redux";
import configureStore from "./stores/configureStore";
import AppNavigator from "./navigators/AppNavigator";
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}