
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src/Screens/Home'
import { store } from './src/redux/store';
import RootNavigator from './src/Navigation/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator/>
       {/* <Home/> */}
     </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
